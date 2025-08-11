// 📅 日付変換ブックマークレット
// 開発: 2025年8月11日
// 開発時間: 7時間7分
// 作成者: ITジャーナリスト

javascript:(function(){
    function convertDate(text) {
        const today = new Date();
        let result = text;
        
        // MM/DD形式の変換
        result = result.replace(/(\d{1,2})\/(\d{1,2})/g, (match, month, day) => {
            const m = parseInt(month);
            const d = parseInt(day);
            
            if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
                const year = today.getFullYear();
                const targetDate = new Date(year, m - 1, d);
                const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                
                return `${year}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}-${dayNames[targetDate.getDay()]}`;
            }
            return match;
        });
        
        // 相対日付の変換
        const relativeReplacements = [
            { pattern: /昨日|きのう/g, offset: -1 },
            { pattern: /今日|きょう/g, offset: 0 },
            { pattern: /明日|あした|あす/g, offset: 1 },
            { pattern: /明後日|あさって/g, offset: 2 }
        ];
        
        relativeReplacements.forEach(({ pattern, offset }) => {
            result = result.replace(pattern, (match) => {
                const targetDate = new Date(today);
                targetDate.setDate(today.getDate() + offset);
                
                const year = targetDate.getFullYear();
                const month = targetDate.getMonth() + 1;
                const day = targetDate.getDate();
                const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                
                return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}-${dayNames[targetDate.getDay()]}`;
            });
        });
        
        return result;
    }
    
    // DOM内のテキストノードを取得
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                const parent = node.parentElement;
                if (parent && ['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA'].includes(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    // 変換実行
    let count = 0;
    textNodes.forEach(textNode => {
        const originalText = textNode.textContent;
        const convertedText = convertDate(originalText);
        
        if (originalText !== convertedText) {
            textNode.textContent = convertedText;
            count++;
            
            // 視覚的フィードバック
            const parent = textNode.parentElement;
            if (parent) {
                parent.style.backgroundColor = '#ffeb3b';
                parent.style.transition = 'background-color 0.5s';
                setTimeout(() => {
                    parent.style.backgroundColor = '';
                }, 2000);
            }
        }
    });
    
    // 通知表示
    if (count > 0) {
        const notification = document.createElement('div');
        notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#4caf50;color:white;padding:15px 20px;border-radius:8px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;z-index:9999;box-shadow:0 4px 8px rgba(0,0,0,0.2);';
        notification.textContent = `📅 ${count}個の日付を変換しました！`;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    } else {
        alert('変換可能な日付が見つかりませんでした。');
    }
})();
