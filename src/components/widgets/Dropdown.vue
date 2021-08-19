<template>
<div
  v-clickaway="clickaway"
  class="dropdown"
  @click.stop="toggle(!modelValue)"
>
  <slot />
  <transition name="menu">
    <div
      v-show="modelValue"
      ref="dropdown"
      class="dropdown-menu show"
      @click.stop
    >
      <slot name="dropdown" />
    </div>
  </transition>
</div>
</template>

<script setup>

const emit = defineEmits(['update:modelValue']);

defineProps({
  modelValue: Boolean,
});

const toggle = (value) => {
  emit('update:modelValue', value);
};

const clickaway = () => {
  toggle(false);
};
</script>

<style lang="postcss">
.dropdown {
  position: relative;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  left: 0;
  width: 100%;
  top: 20px;
}
.menu-enter-active, .menu-leave-active {
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.75, 2, 0.36, 0.85);
}
.menu-enter-from, .menu-leave-active {
  opacity: 0;
}
.menu-enter-from, .menu-leave-to {
  position: absolute;
}
.menu-enter-from {
  transform: translateY(-10px);
}
.menu-leave-active {
  transform: translateY(10px);
}
</style>
