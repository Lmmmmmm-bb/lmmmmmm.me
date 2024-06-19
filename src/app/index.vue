<script setup lang="ts">
import { externalConfig } from './config';
import ExternalLink from '~/components/external-link';
</script>

<template>
  <main
    p="x-6 y-8vh"
    mx-auto max-w-76ch
    transition-colors xl:text-lg dark:prose-invert
  >
    <header text-5xl font-bold text-primary>
      <span block>Hello,</span>
      <span mt-2 block>I'm lmmmmmm.</span>
    </header>
    <div mt-6 text-xl text-secondary>
      <p>Front-end developer.</p>
      <p mt-2>
        Like open source and make toys.
      </p>
      <p mt-2>
        Make some simple contributions to the community in free time.
      </p>
    </div>
    <div mt-4 flex gap-xl>
      <ExternalLink
        v-for="item in externalConfig"
        :key="item.to"
        :data-umami-event="item.event"
        v-bind="item"
      />
    </div>
  </main>
</template>
