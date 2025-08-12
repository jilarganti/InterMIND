---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
  const chatPrompts = [
    { id: "49", text: "このサイトの人気ページ、表形式", category: "general" },
    { id: "49", text: "このサイトのトップ10よくある質問", category: "general" },
    { id: "49", text: "フリーゾーンサイトのリンク、表形式", category: "general" },
    { id: "49", text: "価格付きフリーゾーンサイトへのリンク一覧", category: "general" },
    
    { id: "1", text: "UAEでの会社登記", category: "business" },
    { id: "7", text: "UAE事業ライセンスの要件", category: "business" },
    { id: "7", text: "UAE事業体タイプの比較、表とデータ分析", category: "business" },
    { id: "7", text: "イギリスから各フリーゾーンへの金融事業の移転コストの専門家による比較。創業者2名、ビザ8件、家族3名+犬1匹。ビジネスセンターでの賃貸。イギリス人、UAE非居住者", category: "business" },
    { id: "48", text: "UAEのベスト病院10選、メリットとデメリット", category: "healthcare" },

    { id: "15", text: "UAEでの委任状", category: "legal" },

    // ビジネスサービス（第1ブロック）
    { id: "2", text: "Mainland会社設立", category: "business" },
    { id: "3", text: "Free zone会社登記", category: "business" },
    { id: "4", text: "オフショア会社設立", category: "business" },
    { id: "5", text: "UAEフリーランスビザ", category: "business" },
    { id: "6", text: "ドバイ事業ライセンス", category: "business" },
    { id: "23", text: "UAE事業設立", category: "business" },
    { id: "24", text: "ドバイフリーゾーン", category: "business" },
    { id: "25", text: "UAE会社登記", category: "business" },
    { id: "26", text: "UAEフリーランスビザ", category: "business" },
    
    // ビザと移民
    { id: "8", text: "UAE Golden Visa申請", category: "visa" },
    { id: "9", text: "UAE就労ビザ", category: "visa" },
    { id: "10", text: "UAEの家族ビザスポンサーシップ", category: "visa" },
    { id: "11", text: "ビザ健康診断要件", category: "visa" },
    { id: "12", text: "UAE居住ビザ手続き", category: "visa" },
    { id: "27", text: "UAEビザ要件", category: "visa" },
    
    // 法務と文書
    { id: "13", text: "Emirates ID申請", category: "legal" },
    { id: "14", text: "UAE文書認証", category: "legal" },
    { id: "16", text: "UAE事業契約書審査", category: "legal" },
    { id: "40", text: "Emirates ID更新", category: "legal" },
    
    // 金融サービス
    { id: "17", text: "UAE法人銀行口座", category: "finance" },
    { id: "18", text: "UAE税務登録（VAT）", category: "finance" },
    { id: "19", text: "UAE会計サービス", category: "finance" },
    { id: "20", text: "UAE経済実体規制", category: "finance" },
    { id: "41", text: "UAE銀行サービス", category: "finance" },
    
    // 不動産とサービス
    { id: "21", text: "UAE不動産投資", category: "property" },
    { id: "22", text: "ドバイオフィススペース賃貸", category: "property" },

    // 医療
    { id: "47", text: "UAE医療保険", category: "healthcare" },
    { id: "49", text: "UAE健康診断", category: "healthcare" },
    
    // 観光とエンターテイメント（最後）
    { id: "28", text: "ドバイ観光スポット", category: "travel" },
    { id: "29", text: "Expo City Dubai", category: "attractions" },
    { id: "30", text: "Dubai Frameチケット", category: "attractions" },
    { id: "31", text: "Burj Khalifaチケット", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Dubai Mallショッピング", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
