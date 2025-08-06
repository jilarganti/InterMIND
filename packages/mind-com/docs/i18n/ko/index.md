---
layout: home
title: "화상 통화를 위한 실시간 음성 번역"
isHome: true
---

<HeroSection title="**모든** 언어로 만나세요" :typingSpeed="10" text="화상 통화에서 **실시간 음성 번역** — 빠르고 명확하며 국경 없는 소통.">
<NavButton buttonLabel="작동 방식" buttonClass="brand" to="/#HowItWorks" />
<NavButton buttonLabel="어시스턴트" buttonClass="alt" to="/chat" />
</HeroSection>

<span id="1"></span>
<FeatureBlock
    :card="{
      title: '번역 ≠ 이해. 다음 단계를 소개합니다.',
      details: '언어에 상관없이, 당신의 목소리는 마치 같은 언어를 사용하는 것처럼 전달되고 이해됩니다.',
      items: [
        '✧ [실시간](./product/overview/how-it-works)으로 자연스럽게, 자막이나 지연 없이.',
        '✧ AI 기반 통역으로 어조, 의도, 산업 특화 용어를 포착합니다.',
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
      title: '회의 속의 지능',
      details: 'InterMind는 모든 다국어 통화를 명확하고 검색 가능한 지식으로 전환합니다.',
      items: [
        '✧ **무엇이든 물어보세요** — AI가 **모든 회의에서** 답을 찾아냅니다.',
        '✧ 작업, 담당자, 마감일을 자동으로 추출합니다.',
        '✧ 즉시 모든 언어로 핵심 포인트를 요약합니다.',
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
      title: '단순한 대화가 아닌 전문적인 회의를 위해 설계',
      details: 'InterMind는 가벼운 애드온이나 플러그인이 아닌 [전문가급 화상 회의 플랫폼](./product/overview/video-meeting-platform)입니다.',
      items: [
        '✧ 1080p 해상도, 스마트 노이즈 제거, 일정 관리, 진행 관리, 화면 공유, 녹화, 자막, 참가자 채팅, 캘린더 통합 — 모두 내장되어 있어 **바로 사용** 가능합니다.',
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
      title: '중요한 곳의 프라이버시',
      details: 'InterMind는 신뢰가 중요한 대화를 위해 설계되었습니다 — 프라이버시와 통제가 가장 중요한 곳에서.',
      items: ['✧ [프라이버시 존](./product/overview/privacy-architecture) — EU, US, SE Asia', '✧ **데이터 학습 없음**. 제3자 접근 불가.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> [!tip] 누구를 위한 서비스인가요?  
> **언어 장벽으로 인해 지연**, **거래 손실** 또는 **비용이 많이 드는 오해**가 발생하는 **국제 팀**을 위해 설계되었습니다. [자세히 알아보기 ...](./product/overview/markets)

## Google Meet + 실시간 번역처럼 작동

친숙한 인터페이스. 보편적인 의사소통. Google Meet와 같은 편리함 — 언어 장벽을 없애주는 즉각적인 번역 기능 포함.

<span id="HowItWorks"></span>

<FeatureCards
    :features="[
      {
        title: '무료로 가입하기',
        details: '언어를 선택하고 [계정 만들기](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: '미팅 시작하기',
        details: '즉시 생성하거나 미리 예약하세요.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: '미팅 참여하기',
        details: '링크 클릭, 이름 입력, 즉시 참여.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '자신의 언어로 말하기',
        details: '모든 사람이 자신의 언어로 말하고 들을 수 있습니다.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<span id="Example"></span>

## 예시: 회의에서 실시간 음성 번역이 작동하는 방식

다음과 같은 상황을 가정해봅시다:

> 사용자가 **스페인어**를 **사이트 현지화 언어**로 사용합니다. 회의를 주최하고 두 명의 참가자를 초대합니다:
>
> - 🧑‍💼 참가자 1은 **영어** 인터페이스를 사용
> - 👩 참가자 2는 **중국어** 인터페이스를 사용

### 회의 중에는 어떤 일이 일어나나요?

각 참가자는 제품에 입장할 때 선택한 언어로 **말하고 듣습니다**.  
이 단일 언어 설정은 다음에 적용됩니다:

- **인터페이스 언어**
- **음성 입력** (말하는 내용)
- **번역된 출력** (듣는 내용)

| 참가자      | 선택한 언어 | 말하는 언어 | 듣는 언어 |
| ----------- | ----------- | ----------- | --------- |
| 주최자      | 스페인어    | 스페인어    | 스페인어  |
| 참가자 1    | 영어        | 영어        | 영어      |
| 참가자 2    | 중국어      | 중국어      | 중국어    |

[플랫폼은 모든 음성을 실시간으로 자동 통역합니다](./product/overview/how-it-works) — 따라서 모든 사람이 같은 언어를 사용하는 것처럼 의사소통할 수 있습니다.

### 통화 중에 언어를 변경할 수 있나요?

네. **설정**을 열고 `사용 언어` 필드를 변경할 수 있습니다:

:::details 설정 패널
<img src="/settings.png" alt="설정-패널" width="300px" />
:::

이를 변경하면 다음과 같은 의미입니다:

- 정확한 번역을 위해 `선택한 언어`로 말해야 합니다
- 다른 사람의 말을 `선택한 언어`로 듣게 됩니다
- 인터페이스가 자동으로 `선택한 언어`로 전환됩니다

> 📌 참고: "사용 언어"는 **단일 통합 설정**입니다  
> **말하는 방식**, **듣는 내용**, 그리고 **보는 내용**을 제어합니다.  
> 한 언어로 말하고 다른 언어로 듣는 것은 **지원되지 않습니다** — 경험을 단순하고 예측 가능하게 유지하기 위한 설계입니다.

## 명확하고 단순한 가격

첫 통화부터 유창한 대화까지 — 모든 규모에서.

<span id="Pricing"></span>

<PricingPlans
    :plans="[
      {
        title: '**베이직** &nbsp 1명 사용자',
        price: '**무료**',
        details: '신용카드 불필요',
        items: [
          '**25**회 미팅',
          '**100**명 참가자 화상 미팅 [💬](#3)',
          '사용자당 **30** GB 공유 스토리지',
          '모든 미팅 검색 기능 [💬](#2)',
          '동시 통역 [💬](#1)',
        ],
      },
      {
        title: '**프로**  &nbsp 1-99명 사용자',
        price: '**$20** /월/사용자, 연간 결제',
        details: '또는 월 $25 결제',
        items: [
          '**무제한** 미팅',
          '**150**명 참가자 화상 미팅 [💬](#3)',
          '사용자당 **2** TB 공유 스토리지',
          '모든 미팅 검색 기능 [💬](#2)',
          '동시 통역 [💬](#1)',
        ],
      },
      {
        title: '**비즈니스** &nbsp 100명 이상 사용자',
        price: '**맞춤형 가격**',
        details: '프라이버시 중심 설계',
        items: [
          '**무제한** 미팅',
          '**500**명 참가자 화상 미팅 [💬](#3)',
          '사용자당 **5** TB 공유 스토리지',
          '모든 미팅 검색 기능 [💬](#2)',
          '동시 통역 [💬](#1)',
          '**프라이버시 존** [💬](#4)',
        ],
      },
    ]">
<AuthButton text="무료로 시작하기" buttonClass="brand" eventName="try_it_attempt" />
<AuthButton text="지금 구매하기" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="영업팀과 상담하기" buttonClass="alt" />
</PricingPlans>

> [!warning] 😱 모든 언어를 구사하거나 — 아니면 다른 사람이 당신의 거래를 성사시킬 것입니다.

<span id="Testimonials"></span>

## 고객들의 후기

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 문법을 외우는 데 시간을 낭비하지 마세요 — 당신의 실력을 키우는 데 집중하세요.

## 자주 묻는 질문

<span id="FAQ"></span>

<AccordionGroup
    :items="[
      {
        q: 'InterMind는 어떤 언어로 통역을 지원하나요?',
        a: 'InterMind는 다음 19개 언어로 **실시간 통역**을 지원합니다:<br><br>- العربية (ar) – Arabic<br>- Čeština (cs) – Czech<br>- Deutsch (de) – German<br>- English (en) – English<br>- Español (es) – Spanish<br>- Français (fr) – French<br>- हिन्दी (hi) – Hindi<br>- Magyar (hu) – Hungarian<br>- Italiano (it) – Italian<br>- 日本語 (ja) – Japanese<br>- 한국어 (ko) – Korean<br>- Nederlands (nl) – Dutch<br>- Polski (pl) – Polish<br>- Português (pt) – Portuguese<br>- Русский (ru) – Russian<br>- Türkçe (tr) – Turkish<br>- 中文 (zh) – Chinese<br><br>우리는 지속적으로 이 목록을 확장하고 있으며, 주요 업데이트마다 새로운 언어가 추가됩니다.',
      },
      {
        q: '라이선스 사용자와 참가자의 차이점은 무엇인가요?',
        a: '*라이선스 사용자*는 무료 또는 유료 회의 라이선스를 보유하고 있으며 자신의 플랜 한도 내에서 회의를 예약할 수 있습니다. *참가자*는 초대받은 사람으로, **계정이나 라이선스가 필요 없으며** 어떤 기기에서든 **무료로** 접속할 수 있습니다.',
      },
      {
        q: 'InterMind 라이선스는 몇 명이 사용할 수 있나요?',
        a: '각 *라이선스 사용자*는 **무제한 회의**를 주최할 수 있습니다. 여러 팀원이 동시에 회의를 주최해야 하는 경우, 각자 개별 라이선스가 필요합니다.',
      },
      {
        q: '회의 최대 지속 시간은 얼마인가요?',
        a: '모든 플랜에서 회의는 최대 **24시간**까지 진행할 수 있습니다.',
      },
      {
        q: '주최할 수 있는 회의 횟수에 제한이 있나요?',
        a: '*무료 기본* 플랜은 **25회의 무료 회의**를 포함합니다. *Pro*와 *Business* 플랜은 더 많은 참가자와 제어 기능으로 무제한 회의를 제공합니다.',
      },
      {
        q: 'InterMind는 데이터 프라이버시와 보안을 어떻게 보장하나요?',
        a: 'InterMind는 **설계부터 프라이버시**를 고려했습니다. 모든 데이터는 선택한 **프라이버시 존** — _EU_, _US_, 또는 _Asia_ 내에서 처리되고 저장됩니다. 우리는 [**GDPR**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa), UAE PDPL을 준수하며, 귀하의 콘텐츠를 훈련이나 제3자 접근에 **절대 사용하지 않습니다**. 고급 [프라이버시 존 제어](./product/overview/privacy-architecture)는 **Business** 플랜에서 이용 가능합니다.',
      },
      {
        q: '플랜 구매 전에 InterMind를 체험해볼 수 있나요?',
        a: '물론입니다. *무료 기본* 플랜은 **25회의 무료 회의**를 포함하여 핵심 기능에 대한 전체 액세스를 제공합니다 — **동시 통역**과 **회의 검색** 포함. 신용카드가 필요 없습니다. 언제든지 업그레이드할 수 있습니다.',
      },
      {
        q: '도움이나 지원이 필요하면 어떻게 하나요?',
        a: '[헬프 센터](./resources/help)를 통해 지원을 받을 수 있습니다. *Business* 사용자는 전담 담당자와 함께 **우선 지원**을 받습니다.',
      },
      {
        q: '구독을 어떻게 관리(업그레이드, 다운그레이드 또는 취소)할 수 있나요?',
        a: '**계정 설정**을 통해 언제든지 플랜을 변경할 수 있습니다. 변경사항은 **즉시** 적용됩니다. 취소의 경우, *월간 플랜*은 청구 주기 말에 취소됩니다. *연간 플랜*은 **비례 배분된 환불**로 취소할 수 있습니다.',
      },
      {
        q: 'InterMind를 웨비나나 대규모 이벤트에 사용할 수 있나요?',
        a: '네. *Pro*와 *Business* 플랜은 **대규모 회의와 웨비나**에 이상적입니다 — *Business*에서는 최대 **500명의 참가자**를 지원합니다.',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: '제품',
        links: [
          { text: 'Overview', link: './product/overview/what-is-intermind' },
          { text: 'Getting Started', link: './product/guide/getting-started' },
          { text: 'Testimonials', link: '#testimonials' },
          { text: 'Pricing', link: '#Pricing' },
        ],
      },
      {
        title: '지원',
        links: [
          { text: 'Get Support', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Service Status', link: 'https://status.mind.com/' },
          { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
          { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
        ],
      },
      {
        title: '리소스',
        links: [
          { text: 'Brand Assets', link: './resources/media-kit' },
          { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '회사',
        links: [
          { text: 'About', link: './resources/company/about' },
          { text: 'Team', link: './resources/company/team' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"/>