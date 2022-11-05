<script setup lang="ts">
const props = defineProps<{ to: string; text: string; icon: string }>();
</script>

<template>
  <a
    :href="props.to"
    text-secondary
    class="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 transition-colors decoration-none"
    hover="bg-#000 text-white"
    dark="hover:bg-white hover:text-#333 bg-gray-50/10"
    target="_blank"
  >
    <div text-xl :class="props.icon" />
    <div ml-1>{{ props.text }}</div>
  </a>
</template>
