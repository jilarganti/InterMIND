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
    // 業務における言語の壁に関する検索クエリ
    { id: "1", text: "言語が分からない外国人クライアントとのコミュニケーション方法", category: "communication" },
    { id: "2", text: "ビジネスミーティングのリアルタイム翻訳", category: "translation" },
    { id: "3", text: "ビデオ通話通訳ソフトウェア", category: "interpretation" },
    { id: "4", text: "言語の壁による取引の失敗", category: "business-problems" },
    
    // 具体的なビジネスシーン
    { id: "5", text: "海外クライアントへのプレゼンテーション方法", category: "presentations" },
    { id: "6", text: "多言語での製品デモの実施", category: "demos" },
    { id: "7", text: "国際営業会議のベストプラクティス", category: "sales" },
    { id: "8", text: "異なる国のサプライヤーとのコミュニケーション", category: "supply-chain" },
    
    // ソリューション検索クエリ
    { id: "9", text: "高額な人間の通訳の代替手段", category: "cost-saving" },
    { id: "10", text: "AI翻訳と人間の翻訳者の比較", category: "comparison" },
    { id: "11", text: "ビジネス向け即時言語翻訳", category: "instant-translation" },
    { id: "12", text: "多言語チームコラボレーションツール", category: "collaboration" },
    
    // 技術要件の検索
    { id: "13", text: "技術的な議論のための翻訳精度", category: "accuracy" },
    { id: "14", text: "企業向けセキュア翻訳ソフトウェア", category: "security" },
    { id: "15", text: "既存のビデオ会議システムとの統合", category: "integration" },
    { id: "16", text: "GDPR準拠の翻訳サービス", category: "compliance" },
    
    // ROIとビジネス価値
    { id: "17", text: "国際ビジネスにおけるコミュニケーションミスのコスト", category: "roi" },
    { id: "18", text: "通訳コストとAIソリューションの比較計算", category: "cost-calculator" },
    { id: "19", text: "国際販売のコンバージョン率向上", category: "conversion" },
    { id: "20", text: "言語トレーニングなしのグローバル展開", category: "expansion" },
    
    // 競合比較検索
    { id: "21", text: "Google Meet翻訳の制限事項", category: "google-meet" },
    { id: "22", text: "Zoom字幕翻訳の問題点", category: "zoom" },
    { id: "23", text: "Microsoft Teams翻訳の品質問題", category: "teams" },
    
    // 業界特有の検索
    { id: "24", text: "海外サプライヤーとの製造コミュニケーション", category: "manufacturing" },
    { id: "25", text: "輸出ビジネスの言語ソリューション", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />