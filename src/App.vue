<template>
<div class="app">
  <router-view />
</div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: $bg1;
  background-color: $text3;
  * {
    box-sizing: border-box;
  }
}

#app, .app {
  height: 100%;
}

a {
  text-decoration: none;
  color: unset;
}

.container {
  max-width: 1200px;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
}
</style>
