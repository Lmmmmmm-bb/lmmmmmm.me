<script setup lang="ts">
const props = defineProps<{ to: string; text: string; icon: string }>();
</script>

<template>
  <a
    :href="props.to"
    text-secondary
    inline-flex
    items-center
    rounded-md
    bg-gray-50
    transition-colors
    decoration-none
    p="x-2 y-1"
    hover="bg-black text-white"
    dark="hover:bg-white hover:text-#333 bg-gray-50/10"
    target="_blank"
  >
    <i text-xl :class="props.icon" />
    <span ml-1>{{ props.text }}</span>
  </a>
</template>
