# 📤 GitHubにファイルをアップロードする方法（初心者向け）

このガイドでは、変更したファイルをGitHubにアップロードする方法を説明します。

## 🖱️ Cursorで操作する場合（推奨・簡単）

CursorにはGit機能が統合されているので、ターミナルを使わずにGUIで操作できます！

**詳細は `CursorでGit操作する方法.md` を参照してください。**

### 簡単な手順（Cursor内）

1. 左側の「**ソース管理**」アイコン（`Cmd + Shift + G`）をクリック
2. 変更されたファイルの横の「**+**」をクリック（すべて追加する場合は「すべての変更をステージング」）
3. メッセージ欄にコミットメッセージを入力
4. 「**✓ コミット**」をクリック
5. 「**...**」→「**プッシュ**」をクリック

これで完了です！

---

## 💻 ターミナルで操作する場合

## 🚀 簡単な3ステップ

### ステップ1: ファイルを追加

変更したファイルをGitに追加します。

```bash
git add .
```

**説明**: `.`は「現在のフォルダ内のすべてのファイル」を意味します。

### ステップ2: 変更を記録（コミット）

変更内容を記録します。

```bash
git commit -m "変更内容の説明"
```

**例**:
```bash
git commit -m "Vercel設定を追加"
git commit -m "デザインを更新"
git commit -m "バグを修正"
```

### ステップ3: GitHubにアップロード（プッシュ）

GitHubにアップロードします。

```bash
git push
```

## 📋 完全な手順（コピペ用）

### 1. プロジェクトフォルダに移動

ターミナルで以下を実行：

```bash
cd "/Users/mitsumori_katsuki/Library/CloudStorage/GoogleDrive-k-mitsumori@surisuta.jp/マイドライブ/01_事業管理/09_Cursol/PRtimes_ラクラク"
```

### 2. 現在の状態を確認

```bash
git status
```

変更されたファイルが表示されます。

### 3. ファイルを追加

```bash
git add .
```

### 4. コミット（変更を記録）

```bash
git commit -m "ファイルを更新"
```

**メッセージの例**:
- "Vercel設定を追加"
- "READMEを更新"
- "バグを修正"
- "新機能を追加"

### 5. GitHubにアップロード

```bash
git push
```

## ✅ 成功した場合

以下のようなメッセージが表示されます：

```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), done.
To https://github.com/k-mitsumori-cmd/prtimes-rakuraku.git
   xxxxxxx..xxxxxxx  main -> main
```

## ❌ エラーが出た場合

### エラー1: "fatal: not a git repository"

**原因**: プロジェクトフォルダに移動していない

**解決方法**:
```bash
cd "/Users/mitsumori_katsuki/Library/CloudStorage/GoogleDrive-k-mitsumori@surisuta.jp/マイドライブ/01_事業管理/09_Cursol/PRtimes_ラクラク"
```

### エラー2: "Permission denied" または認証エラー

**原因**: GitHubの認証情報が正しくない

**解決方法**:
1. GitHubにログインしているか確認
2. パスワードの代わりにPersonal Access Tokenを使用する必要がある場合があります
3. GitHubの設定 → Developer settings → Personal access tokens でトークンを生成

### エラー3: "nothing to commit"

**原因**: 変更するファイルがない

**解決方法**: これはエラーではありません。すべてのファイルが既にアップロードされています。

### エラー4: "Please tell me who you are"

**原因**: Gitのユーザー情報が設定されていない

**解決方法**:
```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

## 📝 よく使うコマンド

### 変更されたファイルを確認

```bash
git status
```

### 変更内容を確認

```bash
git diff
```

### コミット履歴を確認

```bash
git log --oneline
```

### 特定のファイルだけを追加

```bash
git add ファイル名
```

例:
```bash
git add README.md
git add app.js
```

## 🎯 実践例

### 例1: READMEファイルを更新した場合

```bash
git add README.md
git commit -m "READMEを更新"
git push
```

### 例2: 複数のファイルを更新した場合

```bash
git add .
git commit -m "デザインと機能を更新"
git push
```

### 例3: 新しいファイルを追加した場合

```bash
git add .
git commit -m "新しいファイルを追加"
git push
```

## 💡 コツ

1. **こまめにコミット**: 大きな変更を一度にコミットするのではなく、小さな単位でコミットする
2. **わかりやすいメッセージ**: コミットメッセージは、何を変更したかが分かるように書く
3. **プッシュ前に確認**: `git status`で変更内容を確認してからプッシュする

## 🔍 確認方法

アップロードが成功したら、GitHubのリポジトリページを開いて確認：

**https://github.com/k-mitsumori-cmd/prtimes-rakuraku**

ファイルが更新されているか確認できます。

## 🎉 完了！

これでGitHubにファイルをアップロードできました！

