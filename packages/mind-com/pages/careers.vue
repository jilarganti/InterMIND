<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: "Careers — InterMIND",
  meta: [
    {
      name: "description",
      content: "Join InterMIND. We're building technology that removes language barriers between people. Show us what you've built, not where you went to school.",
    },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/careers` }],
})

const services = [
  "Leader who builds the future",
  "Marketer who creates demand",
  "Engineer who builds the impossible",
  "Researcher who advances the science",
  "Seller who drives growth",
  "Designer who solves human problems",
  "Operator who optimizes systems",
  "Specialist who thinks differently",
]
</script>

<template>
  <div class="content">
    <h1>Breaking Down Barriers Between Cultures</h1>

    <p>
      We're building technology that removes language barriers between people. Our product lets people from different countries speak their native language and understand each other naturally.
    </p>
    <p>This isn't a translator. This is a new paradigm for global communication.</p>

    <figure class="hero-image">
      <img src="/resources/iStock-1492917260.jpg" alt="A bridge between cultures" />
    </figure>

    <h2>Show Results, Not Credentials</h2>
    <p>Want to join us? Show us something useful and meaningful you've already built for people.</p>
    <p>
      Education and experience matter, but we care more about: <strong>what real value have you created for people</strong>.
    </p>

    <h3>Your track record is the only reliable measure</h3>
    <p>We're looking for people who:</p>
    <ul>
      <li><strong>Have already built something.</strong> Code that thousands use. A product that solved a real problem. A system that runs without breaking. A team that delivered results.</li>
      <li><strong>Measure their worth by outcomes.</strong> How many people's lives improved because of your work? How much faster did processes run after your improvements? What problems disappeared after your solutions?</li>
      <li><strong>Think globally.</strong> Have you worked with people from different countries? Solved problems in multicultural environments? Built products for international audiences?</li>
      <li><strong>Tackle hard problems.</strong> Taken on projects where no solution existed? Built something from scratch? Made the impossible look obvious?</li>
    </ul>

    <h2>What We're Building</h2>
    <p>
      A platform that makes foreign language fluency optional for professional success. Picture this: a Japanese engineer, German manager, and Brazilian designer discussing a project — each speaking their native language, everyone understanding perfectly.
    </p>
    <p>
      We don't just translate words — we preserve meaning, tone, cultural context. In real-time. No delays. With human-level accuracy.
    </p>

    <h2>Who We're Looking For</h2>

    <h3>Engineers who build the impossible</h3>
    <ul>
      <li>Real-time systems with microsecond latency</li>
      <li>AI models for live speech processing</li>
      <li>Scalable infrastructure for millions of simultaneous calls</li>
      <li>WebRTC optimization for global networks</li>
    </ul>

    <h3>Researchers who advance the science</h3>
    <ul>
      <li>Neural architectures for cross-language understanding</li>
      <li>Algorithms that preserve emotional nuance in translation</li>
      <li>Methods for adapting to regional dialects and accents</li>
      <li>Unsupervised learning systems for multilingual data</li>
    </ul>

    <h3>Designers who solve human problems</h3>
    <ul>
      <li>UX for seamless language switching</li>
      <li>Interfaces that work across all cultures</li>
      <li>Visual systems that communicate without words</li>
      <li>Product solutions for global teams</li>
    </ul>

    <h3>Leaders who build the future</h3>
    <ul>
      <li>International market expansion from zero</li>
      <li>Team building in uncertainty</li>
      <li>Developing "world's first" category products</li>
      <li>Creating new industry standards</li>
    </ul>

    <h2>How We Evaluate</h2>
    <p><strong>Portfolio beats resume.</strong> Show us GitHub, demos, product links. Tell us the story of a problem you solved and the results you achieved.</p>
    <p><strong>Real projects beat coding tests.</strong> We want to see how you work under real constraints with real deadlines.</p>
    <p><strong>Impact beats activity.</strong> One project that changed thousands of lives beats ten technical exercises.</p>
    <p><strong>Learning ability beats current knowledge.</strong> We're building what doesn't exist yet. Your willingness to learn and adapt is critical.</p>

    <h2>The Process</h2>
    <ol>
      <li><strong>Send links.</strong> Not a resume — links to what you've built. GitHub, products, articles, videos, anything that shows your work.</li>
      <li><strong>Tell the story.</strong> What problem did you solve? Why did it matter? How did you measure success? What was the outcome?</li>
      <li><strong>Talk with the team.</strong> If your experience interests us, you'll chat with team members. No formal interviews — just conversations about what and how you build.</li>
      <li><strong>Work with us.</strong> A short real project so everyone understands how we work together.</li>
    </ol>

    <h2>What We Offer</h2>

    <figure class="hero-image">
      <img src="/resources/iStock-2227445862.jpg" alt="World-scale challenges" />
    </figure>

    <p><strong>World-scale challenges.</strong> You'll solve problems that affect billions of people.</p>
    <p><strong>World-class team.</strong> Work with top specialists in AI, real-time systems, and global communication.</p>
    <p><strong>Unlimited resources.</strong> Everything you need to build the best product in the category.</p>
    <p><strong>Global impact.</strong> Your work will change how humanity communicates across language boundaries.</p>

    <p>
      Meet <a href="/team">our team</a> and learn about <a href="/about">our company values</a>.
    </p>

    <h2>Join Us</h2>
    <p>
      If you've already built something meaningful and you're ready to build technology that changes the world — write to us. Show us what you've done. Tell us what you want to build next.
    </p>

    <ContactForm
      :services="services"
      category-label="What's your specialty? *"
      category-placeholder="Choose your area..."
      message-label="Show us your work *"
      message-placeholder="Share links to your projects, GitHub, portfolio, or describe the impact you've made. What problem are you excited to solve next?"
      button-text="Send your application"
      web-site-label="Git / Blog / Site / ..."
      web-site-placeholder="e.g. github.com/yourname"
    />

    <hr />
    <p class="tagline"><em>InterMIND — technology that makes the world truly global.</em></p>
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.65;
}
h1 {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  margin: 1rem 0 1.5rem;
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
h3 {
  font-size: 1.1rem;
  margin: 2rem 0 0.75rem;
  font-weight: 600;
}
p {
  margin: 0 0 1rem;
}
ul,
ol {
  padding-left: 1.25rem;
  margin: 0 0 1.5rem;
}
li {
  margin-bottom: 0.5rem;
}
.hero-image {
  margin: 1.5rem 0;
}
.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
a {
  color: #dd9144;
}
hr {
  border: 0;
  border-top: 1px solid #ececea;
  margin: 3rem 0 1.5rem;
}
.tagline {
  text-align: center;
  color: #666;
}
</style>
