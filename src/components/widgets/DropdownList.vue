<template>
<div class="dropdown-list-wrap">
  <Dropdown
    :modelValue="show"
    class="dropdown-list"
    @update:modelValue="$emit('update:show', $event)"
  >
    <div
      class="list-text-wrap"
      :style="{ height: show ? `${(values.length * 30) + 72}px` : '48px' }"
    >
      <div class="list-text">
        <div class="list-label">
          {{ selectedItemText }}
        </div>
        <div class="list-caret" :class="{ basic: basicCaret, show }">
          <Caret class="caret" color="#777E90" />
        </div>
      </div>
    </div>
    <template #dropdown>
      <div class="list-items">
        <div
          v-for="key in values"
          :key="key"
          :class="{ selected: key === selectedItem }"
          @click="selectItem(key)"
        >
          {{ key }}
        </div>
      </div>
    </template>
  </Dropdown>
</div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const emit = defineEmits(['update:show', 'update:selectedItem']);

const props = defineProps({
  show: Boolean,
  selectedItem: {
    type: String,
    default: null,
  },
  itemKeys: {
    type: Array,
    default: null,
  },
  items: {
    type: Array,
    default: null,
  },
  display: {
    type: Function,
    default: val => val,
  },
  basicCaret: Boolean,
});

const { display, items, selectedItem } = toRefs(props);

const selectItem = (key) => {
  emit('update:selectedItem', key);
  emit('update:show', false);
};
const values = computed(() => (
  (items.value || []).map(display.value)
));
const selectedItemText = computed(() => (
  display.value(selectedItem.value)
));
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.dropdown-list-wrap {
  position: relative;
  min-width: 200px;
  margin-top: 16px;
}
.dropdown-list {
  position: absolute;
  width: 100%;
  z-index: 100;
  .list-text-wrap {
    @mixin text-medium 14px;
    align-items: flex-start;
    color: $text3;
    display: flex;
    border-radius: 12px;
    border: 2px solid $border1;
    padding: 0 8px 0 16px;
    transition: height 0.3s ease;
    background-color: $text2;
    .list-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      width: 100%;
    }
  }
  .list-caret {
    width: 32px;
    height: 32px;
    @mixin flex-center;
    border-radius: 16px;
    border: 2px solid $border1;
    margin-left: 16px;
    .caret {
      width: 10px;
      height: 6px;
      transform: rotate(0);
      transition: transform 0.2s ease;
    }
    &.show .caret {
      transform: rotate(180deg);
    }
    &.basic {
      border: none;
      svg > g {
        stroke: $text3;
      }
    }
  }
  .list-text-wrap.open .caret {
    transform: rotate(-180deg);
  }
  .dropdown-menu {
    position: absolute;
    padding-left: 16px;
    top: 60px;
    .list-items > div {
      padding: 4px 0 8px;
      @mixin text-medium 14px;
      color: $text3;
      &.selected {
        color: $text1;
      }
    }
  }
}
</style>
