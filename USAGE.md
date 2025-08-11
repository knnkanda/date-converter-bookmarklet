# 📅 日付変換ブックマークレット - 使用方法

## ファイル一覧

このフォルダには以下のファイルが含まれています：

### 📄 主要ファイル
- **README.md** - プロジェクトの説明とインストール方法
- **bookmarklet.js** - ブックマークレットの実際のコード（読みやすい形式）
- **LICENSE** - MITライセンス
- **.gitignore** - Git用の除外ファイル設定

### 🛠️ セットアップ用
- **setup_git.sh** - Git リポジトリセットアップ用スクリプト
- **USAGE.md** - このファイル（使用方法）

## GitHubにアップロードする手順

### 方法1: GitHub.com で直接アップロード（推奨）

1. **GitHub.com にアクセス**
   - https://github.com にログイン

2. **新しいリポジトリを作成**
   - 右上の『+』→『New repository』
   - Repository name: `date-converter-bookmarklet`
   - Description: `📅 1クリックで相対日付を絶対日付に変換するブックマークレット`
   - Public を選択
   - 『Create repository』をクリック

3. **ファイルをアップロード**
   - 『uploading an existing file』をクリック
   - このフォルダの全ファイルをドラッグ&ドロップ
   - Commit message: `🎉 Initial commit: Date Converter Bookmarklet`
   - 『Commit changes』をクリック

### 方法2: ターミナルでGitコマンドを使用

1. **ターミナルを開く**
   ```bash
   cd /Users/paul_kanda/Desktop/date-converter-bookmarklet
   ```

2. **セットアップスクリプトを実行**
   ```bash
   chmod +x setup_git.sh
   ./setup_git.sh
   ```

3. **GitHubでリポジトリを作成後**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/date-converter-bookmarklet.git
   git push -u origin main
   ```

## ブックマークレットの使用方法

### インストール
1. ブラウザのブックマークバーを表示
2. ブックマークバーを右クリック→『ページを追加』
3. 名前: `📅日付変換`
4. URL: `bookmarklet.js` ファイル内のコード全体をコピー&ペースト

### 使用方法
1. 日付が含まれるWebページを開く
2. ブックマークバーの『📅日付変換』をクリック
3. 日付が自動変換される

### 変換例
- `8/15の夏祭り` → `2025-08-15-FRIの夏祭り`
- `明日の会議` → `2025-08-12-TUEの会議`
- `昨日の件` → `2025-08-10-SUNの件`

## 開発統計

- **開発時間**: 7時間7分
- **開発日**: 2025年8月11日
- **技術**: JavaScript, 正規表現, DOM操作
- **対応日付形式**: 6種類

## SNS投稿用テキスト

### Facebook用
```
#日付変換ブックマークレット

SNS世代の、LINEにでてくる 8/12 や明日や明後日の、『相対値』での確認を指摘するのではなく、こちら側が自分で納得して、さりげなく『絶対値』で確認したくて作ってみました。

Claude.Appに相談すると、#ブックマークレット が良いのではと懐かしい提案をしてきてくれた。

#ブックマークレット ってまだあったんだ！

GitHub: [リポジトリURLを追加]

#個人開発 #JavaScript #ブックマークレット
```

### X.com用
```
📅8/12→2025-08-12-TUE に1クリック変換！

SNSの「明日」「昨日」を絶対日付にするブックマークレット作った🚀

開発時間7h7m | JavaScript + 正規表現
ブックマークレットってまだあったんだ！

[リポジトリURLを追加]

#個人開発 #JavaScript #ブックマークレット
```

## サポート

質問や問題がある場合は、GitHubリポジトリでイシューを作成してください。

---

🎉 プロジェクト完成おめでとうございます！
