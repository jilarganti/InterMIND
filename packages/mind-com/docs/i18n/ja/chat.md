<script setup>
  const chatPrompts = [
    // Pain-based search queries - Language barriers in business
    "高額な人間通訳者の代替手段",
    "相手の言語を知らずに外国人クライアントとコミュニケーションを取る方法",
    "ビジネス会議のリアルタイム翻訳",
    "ビデオ通話通訳ソフトウェア",
    "言語の壁による商談の失敗",
    
    // Specific business scenarios
    "国際的なクライアントへのプレゼンテーション方法",
    "異なる言語での製品デモの実施",
    "国際営業会議のベストプラクティス",
    "異なる国のサプライヤーとのコミュニケーション",
    
    // Solution-seeking queries
    "AI翻訳と人間翻訳者の比較",
    "ビジネス向けインスタント言語翻訳",
    "多言語チーム協業ツール",
    
    // Technical requirements searches
    "技術的な議論における翻訳精度",
    "企業向けセキュア翻訳ソフトウェア",
    "既存のビデオ会議システムとの統合",
    "GDPR準拠の翻訳サービス",
    
    // ROI and business value
    "国際ビジネスにおける誤解のコスト",
    "通訳者コストとAIソリューションのコスト計算",
    "国際営業のコンバージョン率向上",
    "言語研修なしでのグローバル展開",
    
    // Competitor comparison searches
    "Google Meet翻訳の制限事項",
    "Zoom字幕翻訳の問題",
    "Microsoft Teams翻訳品質の課題",
    
    // Industry-specific searches
    "海外サプライヤーとの製造業コミュニケーション",
    "輸出ビジネス言語ソリューション",
  ]
</script>

<AIChat :prompts="chatPrompts" />