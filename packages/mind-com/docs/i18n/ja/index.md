---
layout: home
title: "ビデオ通話のためのリアルタイム音声翻訳"
isHome: true
---

<HeroSection title="**どの**言語でも会話" :typingSpeed="10" text="ビデオ通話での**リアルタイム音声翻訳** — 迅速、明確、境界のないコミュニケーション。">
<NavButton buttonLabel="仕組み" buttonClass="brand" to="/#HowItWorks" />
<NavButton buttonLabel="アシスタント" buttonClass="alt" to="/chat" />
</HeroSection>

<span id="1"></span>
<FeatureBlock
    :card="{
      title: '翻訳 ≠ 理解。次なる革新とは。',
      details: '言語に関係なく、あなたの声は同じ言語を話すかのように聞こえ、理解されます。',
      items: [
        '✧ [リアルタイム](./product/overview/how-it-works)で自然に、字幕や遅延なし。',
        '✧ AIパワード通訳が、トーン、意図、業界固有の専門用語を捉えます。',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

<span id="2"></span>
<FeatureBlock
    :card="{
      title: 'ミーティング内の知性',
      details: 'InterMindは多言語通話を明確で検索可能な知識に変換します。',
      items: [
        '✧ **何でも質問可能** — AIが**全ミーティングから**回答を見つけます。',
        '✧ タスク、担当者、期限を自動抽出。',
        '✧ どの言語でも即座に要点を要約。',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

<span id="3"></span>
<FeatureBlock
    :card="{
      title: '単なる会話ではなく、ビジネスミーティングのために設計',
      details: 'InterMindは[プロフェッショナルグレードのビデオ会議プラットフォーム](./product/overview/video-meeting-platform)であり、軽量なアドオンやプラグインではありません。',
      items: [
        '✧ 1080p解像度、スマートノイズ抑制、スケジューリング、モデレーション、画面共有、録画、字幕、参加者チャット、カレンダー連携 — すべて組み込み済みで**すぐに使用可能**。',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

<span id="4"></span>
<FeatureBlock
    :card="{
      title: '重要な場面でのプライバシー',
      details: 'InterMindは信頼が重要な会話のために設計されています — プライバシーとコントロールが最も重要な場面で。',
      items: ['✧ [プライバシーゾーン](./product/overview/privacy-architecture) — EU、US、東南アジア', '✧ **データトレーニングなし**。第三者アクセスなし。'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> [!tip] 対象ユーザー  
> 言語の壁が**遅延**、**取引の損失**、または**高額な誤解**を引き起こす**国際チーム**向けに設計。[詳細はこちら ...](./product/overview/markets)

## Google Meetのような使い方 + リアルタイム翻訳

使い慣れたインターフェース。ユニバーサルなコミュニケーション。Google Meetと同じように簡単に使える — 言語の壁を取り除く瞬時の翻訳機能付き。

<span id="HowItWorks"></span>

<FeatureCards
    :features="[
      {
        title: '無料で登録',
        details: '言語を選択して[アカウントを作成](#Pricing)。',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'ミーティングを開始',
        details: '即座に作成するか、事前にスケジュール設定。',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'ミーティングに参加',
        details: 'リンクをクリックし、名前を入力して即座に参加。',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '自分の言語で話す',
        details: '全員が自分の言語で話し、聞くことができます。',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<span id="Example"></span>

## 例：会議でのリアルタイム音声翻訳の仕組み

例えば：

> ユーザーは**サイトのローカライゼーション言語**として**スペイン語**を使用しています。会議を主催し、2人の参加者を招待します：
>
> - 🧑‍💼 参加者1は**英語**でインターフェースを使用
> - 👩 参加者2は**中国語**でインターフェースを使用

### 会議中に何が起こるのか？

各参加者は、製品に入る際に選択した言語で**話し、聞く**ことができます。  
この単一の言語設定は以下に適用されます：

- **インターフェース言語**
- **音声入力**（話す内容）
- **翻訳出力**（聞こえる内容）

| 参加者    | 選択した言語 | 話す言語 | 聞く言語 |
| --------- | ------------ | -------- | -------- |
| 主催者    | スペイン語   | スペイン語| スペイン語|
| 参加者1   | 英語        | 英語     | 英語     |
| 参加者2   | 中国語      | 中国語   | 中国語   |

[プラットフォームは全ての発話をリアルタイムで自動的に通訳します](./product/overview/how-it-works) — そのため、全員が同じ言語を話しているかのようにコミュニケーションを取ることができます。

### 通話中に言語を変更できますか？

はい。**設定**を開いて`使用言語`フィールドを変更できます：

:::details 設定パネル
<img src="/settings.png" alt="設定パネル" width="300px" />
:::

これを変更すると：

- 正確な翻訳のために`選択した言語`で話す必要があります
- 他の人の発言を`選択した言語`で聞くことができます
- インターフェースは自動的に`選択した言語`に切り替わります

> 📌 注意：「使用言語」は**単一の統合設定**です  
> **話す方法**、**聞こえる内容**、**表示される内容**を制御します。  
> ある言語で話し、別の言語で聞くことは**サポートされていません** — これは、体験をシンプルで予測可能に保つための設計上の選択です。

## シンプルで分かりやすい料金プラン

最初の通話から流暢な会話まで — あらゆる規模で対応。

<span id="Pricing"></span>

<PricingPlans
    :plans="[
      {
        title: '**ベーシック** &nbsp ユーザー1名',
        price: '**無料**',
        details: 'クレジットカード不要',
        items: [
          '**25**回のミーティング',
          '**100**名参加可能なビデオ会議 [💬](#3)',
          'ユーザーあたり**30** GBの共有ストレージ',
          'すべての会議を検索可能 [💬](#2)',
          '同時通訳機能 [💬](#1)',
        ],
      },
      {
        title: '**プロ** &nbsp 1-99ユーザー',
        price: '**¥2,000** /月/ユーザー（年間契約）',
        details: '月額払いの場合 ¥2,500',
        items: [
          '**無制限**のミーティング',
          '**150**名参加可能なビデオ会議 [💬](#3)',
          'ユーザーあたり**2** TBの共有ストレージ',
          'すべての会議を検索可能 [💬](#2)',
          '同時通訳機能 [💬](#1)',
        ],
      },
      {
        title: '**ビジネス** &nbsp 100+ユーザー',
        price: '**カスタム価格**',
        details: 'プライバシー重視の設計',
        items: [
          '**無制限**のミーティング',
          '**500**名参加可能なビデオ会議 [💬](#3)',
          'ユーザーあたり**5** TBの共有ストレージ',
          'すべての会議を検索可能 [💬](#2)',
          '同時通訳機能 [💬](#1)',
          '**プライバシーゾーン** [💬](#4)',
        ],
      },
    ]">
<AuthButton text="無料で試す" buttonClass="brand" eventName="try_it_attempt" />
<AuthButton text="今すぐ購入" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="営業担当に相談" buttonClass="alt" />
</PricingPlans>

> [!warning] 😱 すべての言語を話せるか — さもなければ、商談は他社に奪われます。

<span id="Testimonials"></span>

## お客様の声

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 文法を暗記するよりも、あなたの技術を磨くことに時間を使いましょう。

## よくある質問

<span id="FAQ"></span>

<AccordionGroup
    :items="[
      {
        q: 'InterMindはどの言語の通訳に対応していますか？',
        a: 'InterMindは以下の19言語で**リアルタイム通訳**に対応しています：<br><br>- العربية (ar) – アラビア語<br>- Čeština (cs) – チェコ語<br>- Deutsch (de) – ドイツ語<br>- English (en) – 英語<br>- Español (es) – スペイン語<br>- Français (fr) – フランス語<br>- हिन्दी (hi) – ヒンディー語<br>- Magyar (hu) – ハンガリー語<br>- Italiano (it) – イタリア語<br>- 日本語 (ja) – 日本語<br>- 한국어 (ko) – 韓国語<br>- Nederlands (nl) – オランダ語<br>- Polski (pl) – ポーランド語<br>- Português (pt) – ポルトガル語<br>- Русский (ru) – ロシア語<br>- Türkçe (tr) – トルコ語<br>- 中文 (zh) – 中国語<br><br>メジャーアップデートごとに新しい言語を追加し、このリストを継続的に拡大しています。',
      },
      {
        q: 'ライセンスユーザーと参加者の違いは何ですか？',
        a: '*ライセンスユーザー*は無料または有料のミーティングライセンスを持ち、プラン内で会議をスケジュールできます。*参加者*は招待された人で、**アカウントやライセンスは不要**で、どのデバイスからでも**無料**で接続できます。',
      },
      {
        q: '1つのInterMindライセンスは何人まで使用できますか？',
        a: '*ライセンスユーザー*は**無制限のミーティング**を主催できます。複数のチームメンバーが同時にミーティングを主催する必要がある場合、それぞれが個別のライセンスが必要です。',
      },
      {
        q: 'ミーティングの最大時間はどれくらいですか？',
        a: 'すべてのプランで、ミーティングは最大**24時間**まで実施できます。',
      },
      {
        q: '主催できるミーティングの回数に制限はありますか？',
        a: '*無料基本*プランには**25回の無料ミーティング**が含まれています。*Pro*と*Business*プランでは、より多くの参加者と制御機能付きで無制限のミーティングを提供します。',
      },
      {
        q: 'InterMindはデータのプライバシーとセキュリティをどのように確保していますか？',
        a: 'InterMindは**設計上プライベート**です。すべてのデータは選択された**プライバシーゾーン**（_EU_、_US_、または_アジア_）内で処理・保存されます。[**GDPR**](https://gdpr.eu)、[**CCPA**](https://oag.ca.gov/privacy/ccpa)、UAEのPDPLに準拠し、トレーニングやサードパーティーアクセスのためにコンテンツを**使用することは一切ありません**。高度な[プライバシーゾーン制御](./product/overview/privacy-architecture)は**Business**プランで利用可能です。',
      },
      {
        q: 'プラン購入前にInterMindを試すことはできますか？',
        a: 'はい、可能です。*無料基本*プランでは、**25回の無料ミーティング**を含むコア機能に完全にアクセスできます—**同時通訳**や**ミーティング検索**も含まれます。クレジットカードは不要です。いつでもアップグレード可能です。',
      },
      {
        q: 'サポートが必要な場合はどうすればよいですか？',
        a: '[ヘルプセンター](./resources/help)でサポートを受けられます。*Business*ユーザーは専任の担当者による**優先サポート**を受けられます。',
      },
      {
        q: 'サブスクリプションの管理（アップグレード、ダウングレード、またはキャンセル）はどのように行いますか？',
        a: '**アカウント設定**からいつでもプランを変更できます。変更は**即時**に反映されます。キャンセルの場合、*月額プラン*は請求サイクルの終わりにキャンセルされます。*年額プラン*は**日割り計算された返金**でキャンセルできます。',
      },
      {
        q: 'InterMindをウェビナーや大規模イベントに使用できますか？',
        a: 'はい。*Pro*と*Business*プランは**大規模ミーティングやウェビナー**に最適です—*Business*プランでは最大**500人の参加者**をサポートします。',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: '製品',
        links: [
          { text: 'Overview', link: './product/overview/what-is-intermind' },
          { text: 'Getting Started', link: './product/guide/getting-started' },
          { text: 'Testimonials', link: '#testimonials' },
          { text: 'Pricing', link: '#Pricing' },
        ],
      },
      {
        title: 'サポート',
        links: [
          { text: 'Get Support', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Service Status', link: 'https://status.mind.com/' },
          { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
          { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
        ],
      },
      {
        title: 'リソース',
        links: [
          { text: 'Brand Assets', link: './resources/media-kit' },
          { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '会社情報',
        links: [
          { text: 'About', link: './resources/company/about' },
          { text: 'Team', link: './resources/company/team' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"/>