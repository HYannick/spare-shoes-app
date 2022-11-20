<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useTheme } from "@/common/composables/useTheme";

const route = useRoute();
const { themeLabel, switchTheme } = useTheme();
const excludedRoutes = ["welcome", "login", "register"];
const headerVisible = computed(
  () => !excludedRoutes.includes(route.name as string)
);
</script>

<template>
  <header v-if="headerVisible">
    <p class="text -body -black">SpareShoes</p>
    <nav>
      <RouterLink to="/auth">Auth</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />

  <button class="temporary-theme-button" @click="switchTheme">
    {{ themeLabel }}
  </button>
</template>

<style scoped lang="scss">
.temporary-theme-button {
  border: transparent;
  background: var(--color-black-900);
  color: var(--color-black-50);
  font-family: var(--text-font-extra-bold);
  border-radius: 10rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  box-shadow: 0 0 0 0.4rem rgba(var(--color-primary-950-rgb), 0.7);
  bottom: 2rem;
  right: 2rem;
  position: fixed;
}
</style>
