<template>
<div class="spinner-wrap">
  <div class="spinner" :style="spinnerStyle" />
</div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 32,
  },
});

const { size } = toRefs(props);

const spinnerStyle = computed(() => ({
  height: `${size.value}px`,
  width: `${size.value}px`,
}));
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.spinner-wrap {
  display: flex;
  justify-content: center;

  .spinner {
    border: 7px solid $purple1;
    border-radius: 50%;
    border-top: 7px solid $purple2;
    border-bottom: 7px solid $purple2;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>>
