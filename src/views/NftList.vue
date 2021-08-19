<template>
<div class="nft-list">
  <div class="nft-list-title">
    {{ $t('title') }}
  </div>
  <!-- TODO -- Add implementation -->
  <Spinner :size="56" />
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { api } from '/src/api';

onMounted(async () => {
  // TODO -- Get data from API
});
</script>

<style>
@import '/src/assets/css/global.css';

.nft-list {
  padding-top: 120px;
  .nft-list-title {
    @mixin title 32px;
    text-align: center;
    margin-bottom: 48px;
  }
}
</style>