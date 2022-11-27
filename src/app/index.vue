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
    <div mt-6 text-secondary text-xl>
      <p>Front-end developer.</p>
      <p mt-2>Like open source and make little toys.</p>
      <p mt-2>
        Make some simple contributions to the community in my free time.
      </p>
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
        to="mailto:lmmmmmm12138@gmail.com?subject=Hi"
      />
      <ExternalLink
        icon="i-carbon:logo-twitter"
        text="Twitter"
        to="https://twitter.com/_lmmmmmm"
      />
    </div>
  </main>
</template>
