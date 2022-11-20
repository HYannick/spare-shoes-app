<template>
  <div class="input-container">
    <input
      :id="name"
      :name="name"
      :type="type"
      class="input"
      :placeholder="placeholder"
      @blur="handleChange"
      @change="handleChange"
      :value="value"
      :class="inputClasses"
    />
    <span class="input-error-text">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { computed } from "vue";
export interface Props {
  placeholder?: string;
  name: string;
  type: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Some text",
  type: "text",
  disabled: false,
});

const inputClasses = computed(() => ({
  "-error": meta.dirty && (!meta.valid || !value),
  "-valid": meta.dirty && meta.valid,
  "-disabled": props.disabled,
}));

const { value, errorMessage, meta, handleChange } = useField(props.name);
</script>

<style lang="scss">
.input-container {
  max-width: 29rem;
  width: 100%;
}
.input {
  width: 100%;
  padding: 2rem;
  border: transparent;
  box-shadow: 0 0 0 0.3rem var(--color-black-900);
  outline: transparent;
  border-radius: 1rem;
  font-family: var(--text-font-extra-bold);
  color: var(--color-black-800);
  background: transparent;
  font-size: 1.7rem;
  transition: box-shadow 0.5s;
  &.-error {
    box-shadow: 0 0 0 0.3rem var(--color-system-red);
  }
  &.-valid {
    box-shadow: 0 0 0 0.3rem var(--color-system-green);
  }

  &-error-text {
    color: var(--color-system-red);
    font-size: var(--text-size-caption-1);
  }
}
</style>
