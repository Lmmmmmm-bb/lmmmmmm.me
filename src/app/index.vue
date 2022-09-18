<script setup lang="ts">
import ExternalLink from '~/components/external-link';
</script>

<template>
  <main
    class="px-6 py-[8vh] max-w-[76ch] mx-auto xl:text-lg dark:prose-invert transition-colors"
  >
    <header text-5xl font-bold text-primary>
      <span block>Hello,</span>
      <span block mt-2>I'm lmmmmmm.</span>
    </header>
    <div mt-6 text-secondary>
      <div>Front-end developer.</div>
      <div mt-2>Like to make little toys.</div>
      <div mt-2>Enjoy open source and trying to join open source projects.</div>
    </div>
    <div mt-4 flex gap-xl>
      <ExternalLink
        icon="i-carbon:logo-github"
        text="GitHub"
        to="https://github.com/Lmmmmmm-bb"
      />
      <ExternalLink
        icon="i-carbon:logo-google"
        text="Google"
        to="mailto:lmmmmmm12138@gmail.com"
      />
    </div>
  </main>
</template>
