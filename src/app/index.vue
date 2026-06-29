<script setup lang="ts">
import ExternalLink from '~/components/ExternalLink/index.vue';
import { externalConfig } from './config';
</script>

<template>
  <main class="home-shell">
    <section class="hero-panel" aria-labelledby="home-title">
      <p class="kicker">
        Front-end · open source
      </p>

      <header class="hero-header">
        <span class="hello-mark" aria-hidden="true">hello</span>
        <h1 id="home-title">
          <span>I'm</span>
          <span class="name-line">lmmmmmm.</span>
        </h1>
      </header>

      <div class="intro-copy">
        <p>Front-end developer shaping small, useful interfaces.</p>
        <p>Open source, tiny experiments, and browser-side toys are where I spend spare cycles.</p>
        <p>I keep things simple: readable code, sharp edges, and a page that loads before the sentence ends.</p>
      </div>

      <div class="signal-strip" aria-hidden="true">
        <span>view-source</span>
        <span>inspect</span>
        <span>ship</span>
      </div>

      <div v-if="externalConfig.length" class="external-links" aria-label="External links">
        <ExternalLink
          v-for="item in externalConfig"
          :key="item.to"
          :data-umami-event="item.event"
          v-bind="item"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-shell {
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: clamp(24px, 6vw, 72px);
  color: var(--lm-ink);
}

.hero-panel {
  --lm-display-font: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  position: relative;
  isolation: isolate;
  width: min(100%, 1040px);
  min-height: min(680px, calc(100svh - 48px));
  display: grid;
  align-content: center;
  gap: clamp(22px, 3vw, 36px);
  padding: clamp(28px, 7vw, 88px);
  border: 1px solid var(--lm-ink);
  background:
    linear-gradient(90deg, var(--lm-rule) 1px, transparent 1px) 0 0 / 44px 44px,
    linear-gradient(0deg, var(--lm-rule) 1px, transparent 1px) 0 0 / 44px 44px,
    var(--lm-bg);
  box-shadow: 14px 14px 0 var(--lm-ink);
  overflow: hidden;
}

.hero-panel::before {
  content: 'lm';
  position: absolute;
  right: clamp(-30px, -2vw, 12px);
  bottom: clamp(-58px, -4vw, -18px);
  z-index: -1;
  font-family: ui-monospace, 'SFMono-Regular', 'Cascadia Code', Consolas, monospace;
  font-size: clamp(180px, 34vw, 430px);
  font-weight: 900;
  line-height: .72;
  letter-spacing: -.18em;
  color: transparent;
  -webkit-text-stroke: 1px var(--lm-watermark);
  text-stroke: 1px var(--lm-watermark);
}

.hero-panel::after {
  content: '';
  position: absolute;
  inset: 14px;
  z-index: -1;
  pointer-events: none;
  border: 1px dashed var(--lm-hairline);
}

.kicker,
.signal-strip {
  font-family: ui-monospace, 'SFMono-Regular', 'Cascadia Code', Consolas, monospace;
  font-size: clamp(.72rem, 1.4vw, .82rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: .18em;
  text-transform: uppercase;
}

.kicker {
  width: fit-content;
  padding: 10px 12px;
  color: var(--lm-bg);
  background: var(--lm-ink);
}

.hero-header {
  display: grid;
  gap: clamp(10px, 2vw, 18px);
}

.hello-mark {
  width: fit-content;
  border-bottom: 5px solid var(--lm-ink);
  font-family: var(--lm-display-font);
  font-size: clamp(2.6rem, 8vw, 7.2rem);
  font-weight: 950;
  line-height: .78;
  letter-spacing: -.075em;
}

h1 {
  max-width: 100%;
  margin: 0;
  font-family: var(--lm-display-font);
  font-size: clamp(3.8rem, 12vw, 10rem);
  font-weight: 950;
  line-height: .82;
  letter-spacing: -.078em;
  text-transform: lowercase;
}

h1 span {
  display: block;
}

.name-line {
  max-width: 100%;
  font-size: clamp(3.3rem, 10.4vw, 8.4rem);
  letter-spacing: -.088em;
  white-space: nowrap;
}

.intro-copy {
  max-width: 64ch;
  display: grid;
  gap: 12px;
  border-left: 8px solid var(--lm-ink);
  padding-left: clamp(16px, 3vw, 28px);
  font-size: clamp(1.04rem, 2vw, 1.35rem);
  line-height: 1.6;
  color: var(--lm-muted);
}

.intro-copy p {
  margin: 0;
}

.signal-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--lm-ink);
}

.signal-strip span {
  padding: 9px 11px;
  border: 1px solid var(--lm-ink);
  background: var(--lm-bg);
}

.signal-strip span:nth-child(2) {
  color: var(--lm-bg);
  background: var(--lm-ink);
}

.external-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 640px) {
  .home-shell {
    place-items: start;
    padding: 16px;
  }

  .hero-panel {
    min-height: calc(100svh - 32px);
    padding: clamp(28px, 9vw, 42px) clamp(22px, 6vw, 34px);
    box-shadow: 7px 7px 0 var(--lm-ink);
  }

  h1 {
    font-size: clamp(3.4rem, 16vw, 5.8rem);
    letter-spacing: -.072em;
  }

  .name-line {
    font-size: clamp(2.85rem, 13.2vw, 4.9rem);
    letter-spacing: -.09em;
  }

  .hero-panel::after {
    inset: 10px;
  }

  .intro-copy {
    border-left-width: 5px;
  }
}
</style>
