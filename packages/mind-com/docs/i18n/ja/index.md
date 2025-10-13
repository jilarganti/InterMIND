---
layout: home
title: "InterMIND: ビデオ会議のためのリアルタイム音声翻訳"
description: "19以上の言語での同時通訳機能を備えたプロフェッショナルなビデオ会議。トーン、意図、文脈を捉えるAI搭載翻訳。グローバルに会議し、自然にコミュニケーション。"
isHome: true
---

<!-- <HeroSection title="**あらゆる**言語で会議" :typingSpeed="10" text="ビデオ通話でのライブ音声翻訳。瞬時の理解、障壁なし。"> -->

<HeroSection title="**あらゆる**言語を理解" :typingSpeed="20" text="ビデオ会議中の同時通訳。言語の壁を瞬時に打破。">
<NavButton buttonLabel="デモを見る" buttonClass="brand" to="/#HowItWorks" eventName="watch_demo" />
<NavButton buttonLabel="アシスタント" buttonClass="alt" to="/chat" eventName="chat_assistant" />
</HeroSection>

## 翻訳 ≠ 理解 {#1}

<FeatureBlock
    :card="{
      title: '翻訳 ≠ 理解。次に来るものがここにあります。',
      details: '言語に関係なく、あなたの声は同じ言葉を共有しているかのように聞かれ、理解されます。',
      items: [
        '✧ 自然に、[リアルタイム](./product/overview/how-it-works)で、字幕や遅延なしに。',
        '✧ AI搭載の通訳がトーン、意図、業界固有の専門用語を捉えます。',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

## 会議の中の知性 {#2}

<FeatureBlock
    :card="{
      title: '会議の中の知性',
      details: 'InterMindは、すべての多言語通話を明確で検索可能な知識に変換します。',
      items: [
        '✧ **何でも質問** — AIが**会議全体から**答えを見つけます。',
        '✧ タスク、担当者、締切を自動抽出。',
        '✧ 重要なポイントをどの言語でも瞬時に要約。',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

## 本格的な会議のために構築 {#3}

<FeatureBlock
    :card="{
      title: '本格的な会議のために構築 — 単なる通話ではありません',
      details: 'InterMindは[プロフェッショナルグレードのビデオ会議プラットフォーム](./product/overview/video-meeting-platform)であり、軽量なアドオンやプラグインではありません。',
      items: [
        '✧ 1080p解像度、スマートノイズ抑制、スケジューリング、モデレーション、画面共有、録画、字幕、参加者チャット、カレンダー統合 — すべて内蔵されており、**すぐに使用可能**です。',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

## 重要な場面でのプライバシー {#4}

<FeatureBlock
    :card="{
      title: '重要な場面でのプライバシー',
      details: 'InterMindは信頼が重要な会話のために構築されています — プライバシーとコントロールが最も重要な場面で。',
      items: ['✧ [プライバシーゾーン](./product/overview/privacy-architecture) — EU、US、東南アジア', '✧ **ゼロデータトレーニング**。第三者アクセスなし。'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> **これは誰のためのものですか？**  
> _言語の壁が遅延、失注、または高コストな誤解を引き起こす国際チーム向けに構築されています。_ [詳細はこちら ...](./product/overview/markets)

## Google Meetのように動作 + リアルタイム翻訳 {#HowItWorks}

馴染みのあるインターフェース。ユニバーサルコミュニケーション。Google Meetと同じ使いやすさ — 言語の壁を消し去る瞬時翻訳付き。

<FeatureCards
    :features="[
      {
        title: '無料でサインアップ',
        details: '言語を選択して[アカウントを作成](#Pricing)してください。',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'ミーティングを開始',
        details: '即座に作成するか、事前にスケジュールします。',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'ミーティングに参加',
        details: 'リンクをクリック、名前を入力、即座に参加。',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '母国語で話す',
        details: '全員が自分の言語で話し、聞くことができます。',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<!-- <br> -->

## ビデオデモ {#VideoDemo}

<VideoPlayer src="/promo/demo-en-mx.mp4" />

## 例：会議でのリアルタイム音声翻訳の仕組み {#Example}

例えば：

ユーザーは**サイトのローカライゼーション言語**として**スペイン語**を使用しています。会議を主催し、2人の参加者を招待します：

- 🧑‍💼 参加者1は**英語**でインターフェースを使用
- 👩 参加者2は**中国語**でインターフェースを使用

### 会議中に何が起こるか？

各参加者は、製品に入る際に選択した言語で**話し、聞き**ます。  
この単一の言語設定は以下に適用されます：

- **インターフェース言語**
- **音声入力**（あなたが話すもの）
- **翻訳出力**（あなたが聞くもの）

| 参加者    | 選択した言語 | 話す言語   | 聞く言語   |
| --------- | ------------ | ---------- | ---------- |
| ホスト    | スペイン語   | スペイン語 | スペイン語 |
| 参加者1   | 英語         | 英語       | 英語       |
| 参加者2   | 中国語       | 中国語     | 中国語     |

[プラットフォームはすべての音声をリアルタイムで自動的に解釈します](./product/overview/how-it-works) — そのため、全員が同じ言語を話しているかのようにコミュニケーションできます。

### 通話中に言語を変更できますか？

はい。**設定**を開いて`あなたの言語`フィールドを変更できます：

:::details 設定パネル
<img src="/settings.png" alt="設定パネル" width="300px" />
:::

これを変更すると：

- 正確な翻訳のために`選択した言語`で話す必要があります
- 他の人の声を`選択した言語`で聞くことになります
- インターフェースが自動的に`選択した言語`に切り替わります

> ✨ 「あなたの言語」は**単一の統合設定**です  
> **話し方**、**聞くもの**、**見るもの**を制御します。  
> 一つの言語で話して別の言語で聞くことは**サポートされていません** — 体験をシンプルで予測可能に保つための設計です。

## お客様の声 {#Testimonials}

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

## 明確でシンプルな料金体系 {#Pricing}

初回通話から流暢な会話まで — あらゆる規模に対応。

<PricingPlans
    :plans="[
      {
        title: '**ベーシック** &nbsp 1ユーザー',
        price: '**無料**',
        details: 'クレジットカード不要',
        items: [
          '**25** 会議',
          '**100** 参加者ビデオ会議 [💬](#3)',
          'ユーザーあたり **30** GB プール型ストレージ',
          'すべての会議を横断検索 [💬](#2)',
          '同時通訳 [💬](#1)',
        ],
      },
      {
        title: '**プロ**  &nbsp 1-99ユーザー',
        price: '**$20** /月/ユーザー、年間請求',
        details: 'または月額$25請求',
        items: [
          '**無制限** 会議',
          '**150** 参加者ビデオ会議 [💬](#3)',
          'ユーザーあたり **2** TB プール型ストレージ',
          'すべての会議を横断検索 [💬](#2)',
          '同時通訳 [💬](#1)',
        ],
      },
      {
        title: '**ビジネス** &nbsp 100+ユーザー',
        price: '**カスタム料金**',
        details: 'プライバシー重視設計',
        items: [
          '**無制限** 会議',
          '**500** 参加者ビデオ会議 [💬](#3)',
          'ユーザーあたり **5** TB プール型ストレージ',
          'すべての会議を横断検索 [💬](#2)',
          '同時通訳 [💬](#1)',
          '**プライバシーゾーン** [💬](#4)',
        ],
      },
    ]">

<AuthButton text="始める" button-class="brand" event-name="get_started_attempt"/>
<AuthButton text="今すぐ購入" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="チームに相談" buttonClass="alt" />
</PricingPlans>

> 💡 **_あなたの時間は文法の暗記ではなく、技術の習得に使うべきです。_**  
> 💡 **_真のパートナーシップは、相手の言語での真の会話から始まります。_**

## よくある質問 {#FAQ}

<AccordionGroup
    :items="[
      {
        q: 'InterMindはどの言語の通訳に対応していますか？',
        a: 'InterMindは以下の19言語で**リアルタイム通訳**に対応しています：<br><br>- العربية (ar) – アラビア語<br>- Čeština (cs) – チェコ語<br>- Deutsch (de) – ドイツ語<br>- English (en) – 英語<br>- Español (es) – スペイン語<br>- Français (fr) – フランス語<br>- हिन्दी (hi) – ヒンディー語<br>- Magyar (hu) – ハンガリー語<br>- Italiano (it) – イタリア語<br>- 日本語 (ja) – 日本語<br>- 한국어 (ko) – 韓国語<br>- Nederlands (nl) – オランダ語<br>- Polski (pl) – ポーランド語<br>- Português (pt) – ポルトガル語<br>- Русский (ru) – ロシア語<br>- Türkçe (tr) – トルコ語<br>- 中文 (zh) – 中国語<br><br>このリストは継続的に拡張されており、メジャーリリースごとに新しい言語が追加されます。',
      },
      {
        q: 'ライセンスユーザーと参加者の違いは何ですか？',
        a: '*ライセンスユーザー*は無料または有料のミーティングライセンスを持ち、プランの制限内でミーティングをスケジュールできます。*参加者*は招待された方で、**アカウントやライセンスは不要**で、どのデバイスからでも**無料で**参加できます。',
      },
      {
        q: '1つのInterMindライセンスで何人が使用できますか？',
        a: '各*ライセンスユーザー*は**無制限のミーティング**を主催できます。複数のチームメンバーが同時にミーティングを主催する必要がある場合、それぞれが独自のライセンスが必要です。',
      },
      {
        q: 'ミーティングの最大時間はどのくらいですか？',
        a: 'すべてのプランでミーティングは最大**24時間**まで実行できます。',
      },
      {
        q: '主催できるミーティング数に制限はありますか？',
        a: '*Free Basic*プランには**25回の無料ミーティング**が含まれています。*Pro*および*Business*プランでは、より多くの参加者と制御機能で無制限のミーティングを提供します。',
      },
      {
        q: 'InterMindはデータプライバシーとセキュリティをどのように確保していますか？',
        a: 'InterMindは**プライバシー・バイ・デザイン**です。すべてのデータは選択された**プライバシーゾーン**（_EU_、_US_、または_アジア_）内で処理・保存されます。[**GDPR**](https://gdpr.eu)、[**CCPA**](https://oag.ca.gov/privacy/ccpa)、UAE PDPLに準拠し、**お客様のコンテンツを**トレーニングやサードパーティアクセスに**決して使用しません**。高度な[プライバシーゾーン制御](./product/overview/privacy-architecture)は**Business**プランで利用可能です。',
      },
      {
        q: 'プランを購入する前にInterMindを試すことはできますか？',
        a: 'もちろんです。*Free Basic*プランでは、**同時通訳**や**ミーティング検索**を含む**25回の無料ミーティング**でコア機能にフルアクセスできます。クレジットカードは不要です。いつでもアップグレード可能です。',
      },
      {
        q: 'ヘルプやサポートが必要な場合はどうすればよいですか？',
        a: '[ヘルプセンター](./resources/help)でサポートを利用できます。*Business*ユーザーは専用の連絡先で**優先サポート**を受けられます。',
      },
      {
        q: 'サブスクリプションの管理（アップグレード、ダウングレード、キャンセル）はどのように行いますか？',
        a: '**アカウント設定**からいつでもプランを変更できます。変更は**即座に**有効になります。キャンセルについては、*月額プラン*は請求サイクルの終了時にキャンセルされます。*年額プラン*は**日割り返金**でキャンセルできます。',
      },
      {
        q: 'InterMindをウェビナーや大規模イベントに使用できますか？',
        a: 'はい。*Pro*および*Business*プランは**大規模ミーティングやウェビナー**に最適で、*Business*では最大**500人の参加者**をサポートします。',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: '製品',
        links: [
          { text: '概要', link: './product/overview/what-is-intermind' },
          { text: 'はじめに', link: './product/guide/getting-started' },
          { text: 'お客様の声', link: '#Testimonials' },
          { text: '料金', link: '#Pricing' },
        ],
      },
      {
        title: 'サポート',
        links: [
          { text: 'サポートを受ける', link: './resources/help' },
          { text: 'よくある質問', link: '#FAQ' },
          { text: 'プライバシーポリシー', link: './resources/company/privacy-policy' },
          { text: 'AI法的ガイド', link: './resources/company/legal-regulations-for-ai-services' },
          { text: 'サービス状況', link: 'https://status.mind.com/' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'リソース',
        links: [
          { text: 'ブログ', link: './blog/' },
          { text: 'グローバル言語アクセス・コンプライアンス', link: './blog/posts/global-language-access-compliance' },
          { text: 'ブランドアセット', link: './resources/media-kit' },
          { text: 'AI API / LLMドキュメント', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '会社情報',
        links: [
          { text: '会社概要', link: './resources/company/about' },
          { text: 'チーム', link: './resources/company/team' },
          { text: '採用情報', link: './resources/company/careers' },
          { text: 'お問い合わせ', link: './resources/company/contacts' },
        ],
      },
    ]"/>