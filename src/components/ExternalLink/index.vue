<script setup lang="ts">
const props = defineProps<{ to: string; icon: string }>();
</script>

<template>
  <a
    :href="props.to"
    inline-flex select-none items-center
    rounded-md bg-gray-50 decoration-none
    transition-colors text-secondary
    p="x-2 y-2"
    hover="bg-black text-white"
    dark="hover:bg-white hover:text-#333 bg-gray-50/10"
    target="_blank"
  >
    <i text-xl :class="props.icon" />
  </a>
</template>
