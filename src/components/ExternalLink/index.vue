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

<style scoped>
.external-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--lm-ink);
  background: var(--lm-bg);
  border: 1px solid var(--lm-ink);
  text-decoration: none;
  transition:
    color 180ms ease,
    background 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.external-link:hover {
  color: var(--lm-bg);
  background: var(--lm-ink);
  box-shadow: 4px 4px 0 var(--lm-ink);
  transform: translate(-2px, -2px);
}

.external-link:focus-visible {
  outline: 2px solid var(--lm-ink);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .external-link {
    transition: none;
  }

  .external-link:hover {
    transform: none;
  }
}
</style>
