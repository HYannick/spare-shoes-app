<template>
  <main>
    <div class="hero-container">
      <HeroImage
        src="http://gipsverband.free.fr/stories/ameliaBrodka/Amelia%20Brodka%20110300%20looking.jpg"
        alt="Amelia Brodka"
        radius="rounded"
      ></HeroImage>
    </div>
    <div class="welcome-message">
      <h1 class="text -title-1 -black">Spare Shoes</h1>
      <p class="text -caption-1">{{ t("caption") }}</p>
    </div>
    <div class="login-actions">
      <DefaultButton
        :label="t('actions.login')"
        radius="rounded"
        @click="goToLogin"
      />
      <DefaultButton
        :label="t('actions.register')"
        radius="rounded"
        @click="goToRegister"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeroImage from "@/common/component-library/image/HeroImage.vue";
import DefaultButton from "@/common/component-library/button/DefaultButton.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

const goToLogin = () => {
  router.push({ name: "login" });
};
const goToRegister = () => {
  router.push({ name: "register" });
};
</script>

<style lang="scss">
.hero-container {
  height: 50rem;
}
.welcome-message {
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  color: var(--color-black-900);
}
.login-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}
</style>

<i18n src="./i18n/greetings.json"></i18n>
