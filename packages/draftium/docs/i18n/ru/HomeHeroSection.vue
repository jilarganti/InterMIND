<template>
  <HeroSection title="Не презентуйте — создавайте прототипы" text="Итерируйте интерфейс, логику и структуру — прежде чем написать единственную строку кода.">
    <!-- <AuthButton text="Попробуйте на вашем языке" buttonClass="brand"/> -->
    <NavButton buttonLabel="DRAFTIUM" buttonClass="brand" to="./account/" />
  </HeroSection>

  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Перевод ≠ понимание. Вот что дальше.',
      details: 'Независимо от языка, **ваш голос слышен — и понят** — как если бы вы говорили на одном языке.',
      items: [
        '⚡︎ Естественно, в [реальном времени](./product/overview/how-it-works), без субтитров и задержек.',
        '✧ ИИ-интерпретация улавливает тон, намерения и отраслевую терминологию.',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />
</template>