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
        <span class="hello-mark" aria-hidden="true">HELLO</span>
        <h1 id="home-title" class="home-title">
          <span class="home-title-line">I'm</span>
          <span class="name-line">lmmmmmm.</span>
        </h1>
      </header>

      <div class="intro-copy">
        <p class="m-0">
          Front-end developer shaping small, useful interfaces.
        </p>
        <p class="m-0">
          Open source, tiny experiments, and browser-side toys are where I spend spare cycles.
        </p>
        <p class="m-0">
          I keep things simple: readable code, sharp edges, and a page that loads before the sentence ends.
        </p>
      </div>

      <div class="signal-strip" aria-hidden="true">
        <span class="signal-chip">view-source</span>
        <span class="signal-chip signal-chip-active">inspect</span>
        <span class="signal-chip">ship</span>
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
