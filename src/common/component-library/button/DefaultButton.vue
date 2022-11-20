<template>
  <button
    class="button background-color-black--950"
    :class="[radiusClass]"
    :disabled="props.disabled"
  >
    <span class="text -extra-bold color-black--50">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  label?: string;
  radius?: "rounded" | "circle" | "";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  radius: "",
  disabled: false,
});

const radiusClass = computed(() => props.radius && `-${props.radius}`);
</script>

<style lang="scss">
.button {
  max-width: 29rem;
  width: 100%;
  height: 6rem;
  border: transparent;
  box-shadow: 0 0 0 0.3rem var(--color-black-700);
  cursor: pointer;
  &:disabled,
  &[disabled] {
    box-shadow: 0 0 0 0.3rem var(--color-black-300);
    background-color: var(--color-black-400);
    span {
      color: var(--color-black-700);
    }
  }
}
</style>
