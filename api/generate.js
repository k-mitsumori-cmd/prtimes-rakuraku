import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();

// CORS設定
app.use(cors());
app.use(express.json());

// OpenAIクライアントの初期化
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// キーワード抽出関数
function extractKeywords(text) {
    const commonWords = ['の', 'を', 'に', 'は', 'が', 'と', 'で', 'も', 'から', 'まで', 'など', 'ため', 'こと', 'よう', 'する', 'ある', 'いる', 'なる'];
    const words = text
        .replace(/[^\w\s\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 1 && !commonWords.includes(word));
    
    const uniqueWords = Array.from(new Set(words));
    return uniqueWords.slice(0, 5);
}

// 目的のラベル
const PURPOSE_LABELS = {
    'company-announcement': '会社の発表',
    'event-announcement': 'イベント告知',
    'tool-announcement': 'ツール発表',
    'conversion': 'コンバージョン目的',
    'product-launch': '製品リリース',
    'partnership': 'パートナーシップ',
    'other': 'その他'
};

// 記事生成API
export default async function handler(req, res) {
    // CORS設定
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { title, purpose, companyName, companyUrl, content, variation = 0 } = req.body;

        // バリデーション
        if (!title || !purpose || !companyName || !content) {
            return res.status(400).json({ 
                error: 'タイトル、目的、会社名、内容は必須です' 
            });
        }

        const purposeLabel = PURPOSE_LABELS[purpose] || 'リリース';

        // プロンプトを作成
        const prompt = `あなたはPR TIMES向けのプレスリリース記事を書く専門家です。
以下の情報を元に、プロフェッショナルで魅力的なプレスリリース記事を作成してください。

【タイトル】
${title}

【目的】
${purposeLabel}

【会社名】
${companyName}
${companyUrl ? `URL: ${companyUrl}` : ''}

【内容】
${content}

【要件】
- 記事の最初に「${companyName}${companyUrl ? `（${companyUrl}）` : ''}は、」で始める
- 以下のセクションを含める：
  ■ 概要
  ■ 背景・課題
  ■ 詳細
  ■ 主な特徴・メリット
  ■ 今後の展開・展望
- 各セクションを充実させ、具体的で魅力的な内容にする
- 箇条書きは「・」を使用
- PR TIMESのフォーマットに最適化する
- 文字数は800-1200文字程度

プレスリリース記事を作成してください：`;

        // OpenAI APIを呼び出し
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'あなたはPR TIMES向けのプレスリリース記事を書く専門家です。提供された情報から、プロフェッショナルで魅力的なリリース記事を作成してください。'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.7 + (variation * 0.1),
            max_tokens: 2000
        });

        const generatedText = completion.choices[0].message.content;

        // キーワードを抽出
        const keywords = extractKeywords(title + ' ' + content);
        
        // サマリーを生成
        const lines = generatedText.split('\n').filter(line => line.trim());
        const summary = lines.find(line => line.length > 50 && !line.startsWith('【') && !line.startsWith('■')) || generatedText.substring(0, 200);

        res.json({
            title: title,
            body: generatedText,
            summary: summary.length > 200 ? summary.substring(0, 200) + '...' : summary,
            keywords: keywords
        });

    } catch (error) {
        console.error('記事生成エラー:', error);
        res.status(500).json({ 
            error: '記事の生成に失敗しました',
            message: error.message 
        });
    }
}

