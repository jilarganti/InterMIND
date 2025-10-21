<script setup>
  const chatPrompts = [
    // Core Product & Technology
    "リアルタイムAI通訳 vs 従来の同時通訳者",
    "ビデオ会議におけるAI音声翻訳の仕組み",
    "音声間翻訳のレイテンシベンチマーク",
    "ビジネス会話におけるAI通訳の精度",
    "ライブ会議でのコンテキスト対応AI翻訳",
    
    // Business Use Cases
    "言語の壁のない国際営業会議",
    "インスタント翻訳によるグローバルチーム協業",
    "国境を越えた製造業サプライヤーとのコミュニケーション",
    "多言語カスタマーサポートビデオ通話",
    "国際教育・研修セッション",
    
    // Technical Performance
    "ネットワーク環境が悪い状況でのビデオ会議",
    "apiMind vs Google Meet翻訳パフォーマンス",
    "apiMind vs Zoom通訳機能",
    "アクセント別音声認識精度",
    "AI通訳通話に必要な帯域幅要件",
    
    // Business ROI & Economics
    "コスト比較：AI通訳 vs 人間通訳者",
    "言語アクセス技術導入のROI",
    "ビジネスにおける言語の壁の隠れたコスト",
    "インスタントAI翻訳による時間節約",
    "国際取引における誤解コストの削減",
    
    // Compliance & Regulations
    "米国の言語アクセス法（Title VI、ADA、LEP）",
    "多言語ビデオプラットフォームのGDPRコンプライアンス",
    "医療言語アクセス規制（Section 1557）",
    "クラウド翻訳サービスにおけるデータ主権",
    
    // Competitive Analysis
    "Microsoft Teamsリアルタイム翻訳の制限",
    "Google Meet自動字幕 vs AI通訳",
    "Zoom翻訳機能比較",
    "従来のLSP vs AI通訳プラットフォーム",
    
    // Technology Trends
    "AIによる同時通訳の未来",
    "マルチモーダルAI翻訳（音声＋視覚コンテキスト）",
    "AI通訳における感情知能",
    "低レイテンシ通訳のためのエッジコンピューティング",
    
    // Success Stories & Case Studies
    "AI通訳で国際売上を向上させた企業事例",
    "AIで通訳コストを80%削減",
    "アクセシビリティのためのAI通訳導入大学",
    "病院システムのLEP患者満足度向上",
  ]
</script>

<AIChat :prompts="chatPrompts" />