# 🔗 CursorとGitHub連携手順

CursorでGitHubアカウントを連携すると、認証なしでプッシュ・プルができるようになります。

## 📋 連携手順

### ステップ1: Cursorの設定を開く

1. **Mac**: `Cmd + ,`（コマンド + カンマ）
2. **Windows**: `Ctrl + ,`
3. または、メニューから「**Cursor**」→「**Settings**」を選択

### ステップ2: GitHub認証を設定

#### 方法1: Cursor内で認証（推奨）

1. 設定画面で「**Git**」または「**GitHub**」を検索
2. 「**Git: Enabled**」が有効になっているか確認
3. ソース管理パネル（`Cmd + Shift + G`）を開く
4. 初回プッシュ時に認証ダイアログが表示される場合があります

#### 方法2: GitHub認証を手動で設定

1. 設定画面で「**GitHub**」を検索
2. 「**GitHub: Authentication**」を開く
3. 「**Sign in with GitHub**」をクリック
4. ブラウザが開くので、GitHubアカウントでログイン
5. 認証を許可

### ステップ3: Git認証情報を設定（必要に応じて）

ターミナルで以下を実行：

```bash
git config --global user.name "あなたのGitHubユーザー名"
git config --global user.email "あなたのGitHubメールアドレス"
```

**例**:
```bash
git config --global user.name "k-mitsumori-cmd"
git config --global user.email "your-email@example.com"
```

## 🔐 Personal Access Tokenを使用する場合

GitHubがパスワード認証を廃止しているため、Personal Access Tokenを使用する必要がある場合があります。

### トークンの作成方法

1. GitHubにログイン
2. 右上のアイコンをクリック → 「**Settings**」
3. 左メニューの「**Developer settings**」をクリック
4. 「**Personal access tokens**」→「**Tokens (classic)**」を選択
5. 「**Generate new token**」→「**Generate new token (classic)**」をクリック
6. 以下を設定：
   - **Note**: `Cursor Git Access`（任意の名前）
   - **Expiration**: 適切な期間を選択
   - **Scopes**: `repo`にチェック
7. 「**Generate token**」をクリック
8. **トークンをコピー**（後で表示されないので重要！）

### トークンの使用方法

プッシュ時にパスワードを求められたら、トークンを入力してください。

## ✅ 連携確認

### 確認方法1: プッシュを試す

1. ソース管理パネル（`Cmd + Shift + G`）を開く
2. 何か変更を加える
3. コミットしてプッシュ
4. エラーが出なければ連携成功

### 確認方法2: リモートを確認

ターミナルで以下を実行：

```bash
git remote -v
```

以下のように表示されればOK：

```
origin  https://github.com/k-mitsumori-cmd/prtimes-rakuraku.git (fetch)
origin  https://github.com/k-mitsumori-cmd/prtimes-rakuraku.git (push)
```

## 🚀 連携後の使い方

### プッシュ（アップロード）

1. ソース管理パネル（`Cmd + Shift + G`）を開く
2. ファイルをステージング（「+」をクリック）
3. コミットメッセージを入力
4. 「✓ コミット」をクリック
5. 「...」→「プッシュ」をクリック

### プル（ダウンロード）

1. ソース管理パネルを開く
2. 「...」→「プル」をクリック

### 同期（プッシュ + プル）

1. ソース管理パネルを開く
2. 「同期変更」をクリック

## ❓ よくある問題

### 問題1: 認証エラーが出る

**解決方法**:
1. Personal Access Tokenを作成
2. プッシュ時にトークンを入力

### 問題2: ユーザー情報が設定されていない

**解決方法**:
```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメール"
```

### 問題3: リモートが設定されていない

**解決方法**:
```bash
git remote add origin https://github.com/k-mitsumori-cmd/prtimes-rakuraku.git
```

## 🎉 完了！

これでCursorとGitHubが連携されました！

以降は、Cursor内で簡単にプッシュ・プルができます。


