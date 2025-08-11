#!/bin/bash

# 📅 日付変換ブックマークレット - GitHubアップロード用スクリプト
# 作成日: 2025年8月11日

echo "🚀 Git リポジトリのセットアップを開始します..."

# 1. Gitリポジトリの初期化
git init

# 2. ファイルをステージング
git add .

# 3. 初回コミット
git commit -m "🎉 Initial commit: Date Converter Bookmarklet

📅 SNSの相対日付を絶対日付に1クリック変換するブックマークレット

Features:
- MM/DD形式の日付変換 (8/9 → 2025-08-09-SAT)
- 相対日付の変換 (昨日/今日/明日/明後日)
- 安全なDOM操作 (入力フィールド除外)
- 視覚的フィードバック (ハイライト + 通知)
- クロスブラウザ対応

Development:
- 開発時間: 7時間7分
- 開発日: 2025年8月11日
- 技術: JavaScript, 正規表現, DOM TreeWalker API
- 開発支援: Claude.AI"

# 4. メインブランチに変更
git branch -M main

echo "✅ ローカルリポジトリのセットアップが完了しました！"
echo ""
echo "📝 次の手順:"
echo "1. GitHub.comでリポジトリを作成"
echo "   - 名前: date-converter-bookmarklet"
echo "   - 説明: 📅 1クリックで相対日付を絶対日付に変換するブックマークレット"
echo ""
echo "2. リモートリポジトリを追加:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/date-converter-bookmarklet.git"
echo ""
echo "3. プッシュ:"
echo "   git push -u origin main"
echo ""
echo "4. タグを作成（オプション）:"
echo "   git tag -a v1.0 -m \"Version 1.0: Initial release\""
echo "   git push origin v1.0"
echo ""
echo "🎉 準備完了です！"
