<script setup lang="ts">
import ExternalLink from '~/components/external-link';
import { externalConfig } from './config';
</script>

<template>
  <main
    p="x-6 y-8vh"
    max-w-76ch
    mx-auto
    xl:text-lg
    dark:prose-invert
    transition-colors
  >
    <header text-5xl font-bold text-primary>
      <span block>Hello,</span>
      <span block mt-2>I'm lmmmmmm.</span>
    </header>
    <div mt-6 text-secondary text-xl>
      <p>Front-end developer.</p>
      <p mt-2>Like open source and make little toys.</p>
      <p mt-2>Make some simple contributions to the community in free time.</p>
    </div>
    <div mt-4 flex gap-xl>
      <ExternalLink
        v-for="item in externalConfig"
        :key="item.text"
        v-bind="item"
      />
    </div>
  </main>
</template>
