<template>
<!-- eslint-disable -->
<svg width="14px" height="9px" viewBox="0 0 14 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g :stroke="color" stroke-width="3.5" fill="none">
    <line x1="1.75" y1="1.75" x2="7" y2="7" stroke-linecap="round" />
    <line x1="7" y1="7" x2="12.25" y2="1.75" stroke-linecap="round" />
  </g>
</svg>
<!-- eslint-enable -->
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#23262f',
  },
});
</script>
