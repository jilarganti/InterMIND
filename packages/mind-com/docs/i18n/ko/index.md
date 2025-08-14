---
layout: home
title: "화상 통화를 위한 실시간 음성 번역"
isHome: true
---

<HeroSection title="**모든** 언어로 만나세요" :typingSpeed="10" text="**화상 통화**에서 실시간 음성 번역 — 빠르고, 명확하며, 경계 없는 소통.">
<NavButton buttonLabel="작동 방식" buttonClass="brand" to="/#HowItWorks" />
<NavButton buttonLabel="어시스턴트" buttonClass="alt" to="/chat" />
</HeroSection>

<span id="1"></span>
<FeatureBlock
    :card="{
      title: '번역 ≠ 이해. 다음 단계는 이것입니다.',
      details: '언어에 관계없이, 마치 같은 언어를 사용하는 것처럼 당신의 목소리가 들리고 이해됩니다.',
      items: [
        '✧ 자연스럽게, [실시간으로](./product/overview/how-it-works), 자막이나 지연 없이.',
        '✧ AI 기반 해석이 어조, 의도, 업계별 전문 용어를 포착합니다.',
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
      title: '회의 속의 마음',
      details: 'InterMind는 모든 다국어 통화를 명확하고 검색 가능한 지식으로 변환합니다.',
      items: [
        '✧ **무엇이든 물어보세요** — AI가 **회의 전반에서** 답변을 찾습니다.',
        '✧ 작업, 담당자, 마감일을 자동으로 추출합니다.',
        '✧ 핵심 사항을 모든 언어로 즉시 요약합니다.',
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
      title: '진지한 회의를 위해 구축됨 — 단순한 대화가 아닌',
      details: 'InterMind는 가벼운 애드온이나 플러그인이 아닌 [전문급 화상 회의 플랫폼](./product/overview/video-meeting-platform)입니다.',
      items: [
        '✧ 1080p 해상도, 스마트 노이즈 억제, 일정 관리, 중재, 화면 공유, 녹화, 자막, 참가자 채팅 및 캘린더 통합 — 모든 것이 내장되어 **바로 사용 가능**합니다.',
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
      title: '중요한 곳의 개인정보 보호',
      details: 'InterMind는 개인정보 보호와 통제가 가장 중요한 신뢰가 중요한 대화를 위해 구축되었습니다.',
      items: ['✧ [개인정보 보호 구역](./product/overview/privacy-architecture) — EU, 미국, 동남아시아', '✧ **데이터 훈련 제로**. 제3자 접근 없음.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> [!tip] 누구를 위한 것인가요?  
> 언어 장벽이 **지연**, **거래 손실**, 또는 **비용이 많이 드는 오해**를 야기하는 **국제 팀**을 위해 구축되었습니다. [더 알아보기 ...](./product/overview/markets)

## Google Meet + 실시간 번역처럼 작동

친숙한 인터페이스. 범용 커뮤니케이션. Google Meet과 같은 편리함 — 언어 장벽을 사라지게 하는 즉석 번역 기능과 함께.

<span id="HowItWorks"></span>

<FeatureCards
    :features="[
      {
        title: '무료 가입',
        details: '언어를 선택하고 [계정을 생성](#Pricing)하세요.',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: '회의 시작',
        details: '즉시 생성하거나 미리 예약하세요.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: '회의 참여',
        details: '링크를 클릭하고, 이름을 입력하고, 즉시 참여하세요.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '자신의 언어로 대화',
        details: '모든 사람이 자신의 언어로 말하고 듣습니다.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<span id="Example"></span>

## 예시: 회의에서 실시간 음성 번역이 작동하는 방식

다음과 같은 상황을 가정해 보겠습니다:

> 사용자가 **스페인어**를 **사이트 현지화 언어**로 사용합니다. 그들이 회의를 주최하고 두 명의 참가자를 초대합니다:
>
> - 🧑‍💼 참가자 1은 **영어** 인터페이스를 사용합니다
> - 👩 참가자 2는 **중국어** 인터페이스를 사용합니다

### 회의 중에는 무슨 일이 일어날까요?

각 참가자는 제품에 입장할 때 선택한 언어로 **말하고 듣습니다**.  
이 단일 언어 설정은 다음에 적용됩니다:

- **인터페이스 언어**
- **음성 입력** (당신이 말하는 것)
- **번역된 출력** (당신이 듣는 것)

| 참가자    | 선택한 언어 | 말하는 언어 | 듣는 언어 |
| --------- | ----------- | ----------- | --------- |
| 호스트    | 스페인어    | 스페인어    | 스페인어  |
| 참가자 1  | 영어        | 영어        | 영어      |
| 참가자 2  | 중국어      | 중국어      | 중국어    |

[플랫폼은 모든 음성을 실시간으로 자동 해석합니다](./product/overview/how-it-works) — 따라서 모든 사람이 같은 언어를 사용하는 것처럼 소통할 수 있습니다.

### 통화 중에 언어를 변경할 수 있나요?

네. **설정**을 열고 `내 언어` 필드를 변경할 수 있습니다:

:::details 설정 패널
<img src="/settings.png" alt="설정 패널" width="300px" />
:::

이를 변경하면:

- 정확한 번역을 위해 `선택한 언어`로 말해야 합니다
- 다른 사람들의 말을 `선택한 언어`로 듣게 됩니다
- 인터페이스가 자동으로 `선택한 언어`로 전환됩니다

> 📌 참고: "내 언어"는 **단일 통합 설정**입니다  
> 이는 **말하는 방식**, **듣는 내용**, **보는 내용**을 제어합니다.  
> 한 언어로 말하고 다른 언어로 듣는 것은 **지원되지 않습니다** — 경험을 단순하고 예측 가능하게 유지하기 위한 의도적인 설계입니다.

## 명확하고 간단한 가격

첫 통화부터 유창한 대화까지 — 모든 규모에서.

<span id="Pricing"></span>

<PricingPlans
    :plans="[
      {
        title: '**베이직** &nbsp 1명',
        price: '**무료**',
        details: '신용카드 불필요',
        items: [
          '**25**개 회의',
          '**100**명 참가자 화상 회의 [💬](#3)',
          '사용자당 **30** GB 공유 저장소',
          '모든 회의에서 검색 [💬](#2)',
          '동시 통역 [💬](#1)',
        ],
      },
      {
        title: '**프로**  &nbsp 1-99명',
        price: '**$20** /월/사용자, 연간 결제',
        details: '또는 월간 결제 시 $25',
        items: [
          '**무제한** 회의',
          '**150**명 참가자 화상 회의 [💬](#3)',
          '사용자당 **2** TB 공유 저장소',
          '모든 회의에서 검색 [💬](#2)',
          '동시 통역 [💬](#1)',
        ],
      },
      {
        title: '**비즈니스** &nbsp 100명 이상',
        price: '**맞춤형 가격**',
        details: '프라이버시를 위해 구축됨',
        items: [
          '**무제한** 회의',
          '**500**명 참가자 화상 회의 [💬](#3)',
          '사용자당 **5** TB 공유 저장소',
          '모든 회의에서 검색 [💬](#2)',
          '동시 통역 [💬](#1)',
          '**프라이버시 존** [💬](#4)',
        ],
      },
    ]">

<AuthButton text="시작하기" button-class="brand" event-name="get_started_attempt"/>
<AuthButton text="지금 구매" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="팀과 상담하기" buttonClass="alt" />
</PricingPlans>

> [!warning] 😱 모든 언어를 구사하거나 — 아니면 다른 사람이 당신의 거래를 성사시킵니다.

<span id="Testimonials"></span>

## 고객들의 후기

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 당신의 시간은 문법을 암기하는 것보다 기술을 익히는 데 더 잘 활용됩니다.

## 자주 묻는 질문

<span id="FAQ"></span>

<AccordionGroup
    :items="[
      {
        q: 'InterMind는 통역을 위해 어떤 언어를 지원하나요?',
        a: 'InterMind는 다음 19개 언어로 **실시간 통역**을 지원합니다:<br><br>- العربية (ar) – 아랍어<br>- Čeština (cs) – 체코어<br>- Deutsch (de) – 독일어<br>- English (en) – 영어<br>- Español (es) – 스페인어<br>- Français (fr) – 프랑스어<br>- हिन्दी (hi) – 힌디어<br>- Magyar (hu) – 헝가리어<br>- Italiano (it) – 이탈리아어<br>- 日本語 (ja) – 일본어<br>- 한국어 (ko) – 한국어<br>- Nederlands (nl) – 네덜란드어<br>- Polski (pl) – 폴란드어<br>- Português (pt) – 포르투갈어<br>- Русский (ru) – 러시아어<br>- Türkçe (tr) – 터키어<br>- 中文 (zh) – 중국어<br><br>저희는 지속적으로 이 목록을 확장하고 있으며, 모든 주요 릴리스마다 새로운 언어가 추가됩니다.',
      },
      {
        q: '라이선스 사용자와 참가자는 무엇인가요?',
        a: '*라이선스 사용자*는 무료 또는 유료 회의 라이선스를 보유하고 있으며 플랜 한도 내에서 회의를 예약할 수 있습니다. *참가자*는 초대받은 사람들로, 참여하기 위해 **계정이나 라이선스가 필요하지 않으며** 어떤 기기에서든 **무료로** 연결할 수 있습니다.',
      },
      {
        q: '한 개의 InterMind 라이선스로 몇 명이 사용할 수 있나요?',
        a: '각 *라이선스 사용자*는 **무제한 회의**를 주최할 수 있습니다. 여러 팀원이 동시에 회의를 주최해야 하는 경우, 각자 자신만의 라이선스가 필요합니다.',
      },
      {
        q: '회의의 최대 지속 시간은 얼마나 되나요?',
        a: '모든 플랜에서 회의는 최대 **24시간**까지 진행할 수 있습니다.',
      },
      {
        q: '주최할 수 있는 회의 수에 제한이 있나요?',
        a: '*Free Basic* 플랜에는 **25회의 무료 회의**가 포함됩니다. *Pro* 및 *Business* 플랜은 더 많은 참가자와 제어 기능으로 무제한 회의를 제공합니다.',
      },
      {
        q: 'InterMind는 데이터 개인정보 보호와 보안을 어떻게 보장하나요?',
        a: 'InterMind는 **설계부터 개인정보를 보호**합니다. 모든 데이터는 선택한 **개인정보 보호 구역** — _EU_, _US_, 또는 _Asia_ 내에서 처리되고 저장됩니다. 저희는 [**GDPR**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa), UAE PDPL을 준수하며, **귀하의 콘텐츠를 절대** 훈련이나 제3자 접근에 사용하지 않습니다. 고급 [개인정보 보호 구역 제어](./product/overview/privacy-architecture)는 **Business** 플랜에서 이용할 수 있습니다.',
      },
      {
        q: '플랜을 구매하기 전에 InterMind를 체험해볼 수 있나요?',
        a: '물론입니다. *Free Basic* 플랜은 **25회의 무료 회의**와 함께 **동시 통역** 및 **회의 검색**을 포함한 핵심 기능에 대한 완전한 액세스를 제공합니다. 신용카드는 필요하지 않습니다. 언제든지 업그레이드할 수 있습니다.',
      },
      {
        q: '도움이나 지원이 필요하면 어떻게 하나요?',
        a: '[도움말 센터](./resources/help)를 통해 지원을 받을 수 있습니다. *Business* 사용자는 전담 연락처를 통한 **우선 지원**을 받습니다.',
      },
      {
        q: '구독을 어떻게 관리하나요(업그레이드, 다운그레이드 또는 취소)?',
        a: '**계정 설정**을 통해 언제든지 플랜을 변경할 수 있습니다. 변경사항은 **즉시** 적용됩니다. 취소의 경우, *월간 플랜*은 청구 주기 말에 취소됩니다. *연간 플랜*은 **비례 환불**로 취소할 수 있습니다.',
      },
      {
        q: 'InterMind를 웨비나나 대규모 이벤트에 사용할 수 있나요?',
        a: '네. *Pro* 및 *Business* 플랜은 **대규모 회의와 웨비나**에 이상적이며, *Business*에서는 최대 **500명의 참가자**를 지원합니다.',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: '제품',
        links: [
          { text: '개요', link: './product/overview/what-is-intermind' },
          { text: '시작하기', link: './product/guide/getting-started' },
          { text: '고객 후기', link: '#Testimonials' },
          { text: '요금제', link: '#Pricing' },
        ],
      },
      {
        title: '지원',
        links: [
          { text: '지원 받기', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: '개인정보 처리방침', link: './resources/company/Privacy-Policy' },
          { text: 'AI 법적 가이드', link: './resources/company/Legal-Regulations-for-AI-Services' },
          { text: '서비스 상태', link: 'https://status.mind.com/' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: '리소스',
        links: [
          { text: '블로그', link: './blog' },
          { text: '브랜드 자료', link: './resources/media-kit' },
          { text: 'AI API / LLM 문서', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '회사',
        links: [
          { text: '소개', link: './resources/company/about' },
          { text: '팀', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: '연락처', link: './resources/company/contacts' },
        ],
      },
    ]"/>