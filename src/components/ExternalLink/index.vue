<script setup lang="ts">
const props = defineProps<{ to: string; icon: string }>();
</script>

<template>
  <a
    :href="props.to"
    class="external-link"
    target="_blank"
  >
    <i text-xl :class="props.icon" />
  </a>
</template>
