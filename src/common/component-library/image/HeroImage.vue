<template>
  <div class="hero-image" :class="[radiusClass]">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  src: string;
  alt: string;
  radius?: "rounded" | "circle" | "";
}

const props = withDefaults(defineProps<Props>(), {
  radius: "",
});

const radiusClass = computed(() => props.radius && `-${props.radius}`);
</script>

<style lang="scss">
.hero-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
