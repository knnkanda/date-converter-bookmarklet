# 📅 日付変換ブックマークレット

SNSやメールでよく見る『相対的な日付』を『絶対的な日付』に1クリックで変換するブックマークレットです。

![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 特徴

- **1クリック変換**: ブックマークをクリックするだけで即座に変換
- **インストール不要**: ブラウザのブックマーク機能のみを使用
- **安全設計**: 入力フィールドやスクリプトタグは変更しない
- **視覚的フィードバック**: 変換箇所がハイライトされ、件数も表示
- **クロスブラウザ対応**: Chrome, Firefox, Safari, Edgeで動作

## 📋 対応している日付形式

| 入力 | 出力 | 説明 |
|------|------|------|
| `8/9` | `2025-08-09-SAT` | MM/DD形式 |
| `12/25` | `2025-12-25-THU` | MM/DD形式 |
| `昨日` | `2025-08-10-SUN` | 相対日付 |
| `今日` | `2025-08-11-MON` | 相対日付 |
| `明日` | `2025-08-12-TUE` | 相対日付 |
| `明後日` | `2025-08-13-WED` | 相対日付 |

## 🛠️ インストール方法

### Chrome の場合
1. **Ctrl + Shift + B** (Windows) / **⌘ + Shift + B** (Mac) でブックマークバーを表示
2. ブックマークバーを右クリック → 『ページを追加』
3. 名前: `📅日付変換`
4. URL: 下記のコードをコピー&ペースト

**⚠️ 重要**: 以下のコードは1行で貼り付けてください（改行しないでください）

```
javascript:(function(){function convertDate(text){const today=new Date();let result=text;result=result.replace(/(\d{1,2})\/(\d{1,2})/g,(match,month,day)=>{const m=parseInt(month);const d=parseInt(day);if(m>=1&&m<=12&&d>=1&&d<=31){const year=today.getFullYear();const targetDate=new Date(year,m-1,d);const dayNames=['SUN','MON','TUE','WED','THU','FRI','SAT'];return `${year}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}-${dayNames[targetDate.getDay()]}`;}return match;});const relativeReplacements=[{pattern:/昨日|きのう/g,offset:-1},{pattern:/今日|きょう/g,offset:0},{pattern:/明日|あした|あす/g,offset:1},{pattern:/明後日|あさって/g,offset:2}];relativeReplacements.forEach(({pattern,offset})=>{result=result.replace(pattern,(match)=>{const targetDate=new Date(today);targetDate.setDate(today.getDate()+offset);const year=targetDate.getFullYear();const month=targetDate.getMonth()+1;const day=targetDate.getDate();const dayNames=['SUN','MON','TUE','WED','THU','FRI','SAT'];return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}-${dayNames[targetDate.getDay()]}`;});});return result;}const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){const parent=node.parentElement;if(parent&&['SCRIPT','STYLE','INPUT','TEXTAREA'].includes(parent.tagName)){return NodeFilter.FILTER_REJECT;}return NodeFilter.FILTER_ACCEPT;}});const textNodes=[];let node;while(node=walker.nextNode()){textNodes.push(node);}let count=0;textNodes.forEach(textNode=>{const originalText=textNode.textContent;const convertedText=convertDate(originalText);if(originalText!==convertedText){textNode.textContent=convertedText;count++;const parent=textNode.parentElement;if(parent){parent.style.backgroundColor='#ffeb3b';parent.style.transition='background-color 0.5s';setTimeout(()=>{parent.style.backgroundColor='';},2000);}}});if(count>0){const notification=document.createElement('div');notification.style.cssText='position:fixed;top:20px;right:20px;background:#4caf50;color:white;padding:15px 20px;border-radius:8px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;z-index:9999;box-shadow:0 4px 8px rgba(0,0,0,0.2);';notification.textContent=`📅 ${count}個の日付を変換しました！`;document.body.appendChild(notification);setTimeout(()=>{notification.remove();},3000);}else{alert('変換可能な日付が見つかりませんでした。');}})();
```

## 📱 使用方法

1. 日付が含まれるWebページを開く（Twitter、Facebook、メールなど）
2. ブックマークバーの『📅日付変換』をクリック
3. 日付が自動変換され、変換箇所が黄色くハイライト
4. 右上に変換件数が表示

## 💡 使用例

**SNSでの使用**
```
変換前: 「8/15の夏祭り、明日参加できる？」
変換後: 「2025-08-15-FRIの夏祭り、2025-08-12-TUE参加できる？」
```

**メールでの使用**
```
変換前: 「昨日の会議資料、12/1までに修正してください」
変換後: 「2025-08-10-SUNの会議資料、2025-12-01-MONまでに修正してください」
```

## 🔧 技術詳細

### 使用技術
- **JavaScript ES6+**: アロー関数、テンプレート文字列
- **正規表現**: パターンマッチングによる日付検出
- **DOM TreeWalker API**: 効率的なテキストノード巡回
- **CSS操作**: 動的スタイル変更

### セキュリティ対策
- **安全な要素の除外**: `<script>`, `<style>`, `<input>`, `<textarea>` は変換対象外
- **入力フィールド保護**: ユーザーの入力データは変更しない
- **エラーハンドリング**: 無効な日付は変換しない

## 🌐 対応ブラウザ

- ✅ Google Chrome
- ✅ Mozilla Firefox  
- ✅ Safari
- ✅ Microsoft Edge

## 📊 開発統計

- **開発時間**: 7時間7分
- **開発日**: 2025年8月11日
- **コード行数**: 約100行（圧縮版）
- **対応日付形式**: 6種類

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを開く

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 📧 連絡先

プロジェクトについて質問がある場合は、イシューを作成してください。

## 🙏 謝辞

- 開発アドバイス: Claude.AI
- インスピレーション: SNS世代のコンテクスト能力の高さ

---

⭐ このプロジェクトが役に立った場合は、スターをつけてください！


## 🛠️ 開発者向け

このリポジトリには開発者向けのセットアップスクリプトが含まれています：

- **setup_git.sh**: ローカルGitリポジトリの初期化スクリプト

- 
