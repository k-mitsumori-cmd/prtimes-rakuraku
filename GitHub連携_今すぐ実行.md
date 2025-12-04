# 🔗 GitHub連携 - 今すぐ実行する手順

この手順に従って、CursorとGitHubを連携してください。

## 📋 ステップ1: GitHubでPersonal Access Tokenを作成

### 1-1. GitHubにログイン

1. https://github.com にアクセス
2. ログイン（まだの場合）

### 1-2. Personal Access Tokenを作成

1. 右上のアイコン（プロフィール画像）をクリック
2. 「**Settings**」をクリック
3. 左側のメニューで「**Developer settings**」をクリック（一番下の方）
4. 「**Personal access tokens**」をクリック
5. 「**Tokens (classic)**」をクリック
6. 「**Generate new token**」をクリック
7. 「**Generate new token (classic)**」をクリック

### 1-3. トークンの設定

以下のように設定してください：

- **Note**（メモ）: `Cursor Git Access`（何でもOK）
- **Expiration**（有効期限）: `90 days` または `No expiration`（お好みで）
- **Select scopes**（権限）:
  - ✅ **repo** にチェック（これが重要！）
    - これで、リポジトリへの読み書きができます

### 1-4. トークンを生成

1. 画面を下にスクロール
2. 「**Generate token**」ボタンをクリック
3. **トークンが表示されます**（例: `ghp_xxxxxxxxxxxxxxxxxxxx`）
4. **必ずコピーしてください**（後で表示されません！）
5. 安全な場所に保存してください

## 📋 ステップ2: Cursorで認証を設定

### 方法1: プッシュ時に自動認証（推奨）

1. Cursorで `Cmd + Shift + G` を押してソース管理パネルを開く
2. 何かファイルを少し変更（例: READMEに1行追加）
3. 「**すべての変更をステージング**」をクリック
4. メッセージ欄に「テスト」と入力
5. 「**✓ コミット**」をクリック
6. 「**...**」→「**プッシュ**」をクリック
7. 認証を求められたら：
   - **Username**: `k-mitsumori-cmd`（あなたのGitHubユーザー名）
   - **Password**: 先ほどコピーした**Personal Access Token**を貼り付け

### 方法2: Git Credential Helperを設定（一度設定すればOK）

ターミナルで以下を実行：

```bash
git config --global credential.helper osxkeychain
```

これで、一度認証すれば次回から自動的に認証されます。

## 📋 ステップ3: 連携確認

### テストプッシュ

1. ソース管理パネル（`Cmd + Shift + G`）を開く
2. 何かファイルを少し変更
3. ステージング → コミット → プッシュ
4. エラーが出なければ成功！

## ✅ 連携完了の確認

以下のコマンドで確認できます：

```bash
git push
```

エラーが出なければ連携成功です！

## 🔐 セキュリティについて

- Personal Access Tokenは**パスワードと同じ**です
- 他人に教えないでください
- 漏洩した場合は、GitHubでトークンを削除してください

## ❓ エラーが出た場合

### エラー1: "Authentication failed"

**解決方法**:
- Personal Access Tokenが正しいか確認
- `repo`スコープが選択されているか確認

### エラー2: "Permission denied"

**解決方法**:
- GitHubのリポジトリにアクセス権限があるか確認
- リポジトリが存在するか確認

### エラー3: "remote origin already exists"

**解決方法**: これはエラーではありません。スキップしてOKです。

## 🎉 完了！

これでCursorとGitHubが連携されました！

以降は、Cursor内で簡単にプッシュ・プルができます。


