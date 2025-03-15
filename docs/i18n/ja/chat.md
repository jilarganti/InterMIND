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
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Dubai Frameのチケット", category: "attractions" },
  { id: "3", text: "Burj Khalifaのチケット", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Dubai Mallのレストラン", category: "food" },
  { id: "8", text: "ドバイの最高のアラビア料理", category: "food" },
  { id: "9", text: "ドバイのミシュラン星付きレストラン", category: "food" },
  { id: "10", text: "シャルジャのストリートフード", category: "food" },
  { id: "11", text: "Palm Jumeirahの賃貸", category: "housing" },
  { id: "12", text: "Dubai Marinaのアパート", category: "housing" },
  { id: "13", text: "アブダビの手頃な価格の住宅", category: "housing" },
  { id: "14", text: "UAEの賃貸法", category: "housing" },
  { id: "15", text: "ドバイメトロの地図", category: "transportation" },
  { id: "16", text: "アブダビのタクシー料金", category: "transportation" },
  { id: "17", text: "UAE運転免許証", category: "transportation" },
  { id: "18", text: "Dubai RTAサービス", category: "transportation" },
  { id: "19", text: "Dubai Mallでのショッピング", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Dubai Gold Souk", category: "shopping" },
  { id: "22", text: "Mall of Emiratesのお得情報", category: "shopping" },
  { id: "23", text: "UAE事業設立", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE会社登録", category: "business" },
  { id: "26", text: "UAEフリーランスビザ", category: "business" },
  { id: "27", text: "UAEビザ要件", category: "travel" },
  { id: "28", text: "ドバイの観光スポット", category: "travel" },
  { id: "29", text: "UAE訪問ビザ申請", category: "travel" },
  { id: "30", text: "アブダビの観光地", category: "travel" },
  { id: "31", text: "ドバイ砂漠サファリ", category: "travel" },
  { id: "32", text: "ドバイの外国人向け求人", category: "jobs" },
  { id: "33", text: "UAE就労許可プロセス", category: "jobs" },
  { id: "34", text: "UAEのリモートワーク", category: "jobs" },
  { id: "35", text: "UAE給与ガイド", category: "jobs" },
  { id: "36", text: "UAE天気予報", category: "events" },
  { id: "37", text: "ドバイの今後のイベント", category: "events" },
  { id: "38", text: "UAE建国記念日のお祝い", category: "events" },
  { id: "39", text: "ドバイショッピングフェスティバル", category: "events" },
  { id: "40", text: "Emirates ID更新", category: "services" },
  { id: "41", text: "UAE銀行サービス", category: "services" },
  { id: "42", text: "DEWA請求書支払い", category: "services" },
  { id: "43", text: "Etisalatパッケージアップグレード", category: "services" },
  { id: "44", text: "ドバイの優良学校", category: "education" },
  { id: "45", text: "UAE大学入学", category: "education" },
  { id: "46", text: "KHDA学校評価", category: "education" },
  { id: "47", text: "UAE健康保険", category: "healthcare" },
  { id: "48", text: "ドバイの優良病院", category: "healthcare" },
  { id: "49", text: "UAE健康診断", category: "healthcare" },
  { id: "50", text: "DHAサービス", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />