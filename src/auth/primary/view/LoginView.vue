<template>
  <div class="login">
    <form @submit.prevent="login">
      <div class="login-header">
        <h2 class="text -black -title-1">{{ t("welcome.title") }}</h2>
        <p class="text -headline">{{ t("welcome.subTitle") }}</p>
      </div>
      <div class="login-body">
        <InputField
          name="email"
          type="email"
          :placeholder="t('form.inputs.email.placeholder')"
        />
        <InputField
          name="password"
          type="password"
          :placeholder="t('form.inputs.password.placeholder')"
        />
        <!--        <div class="login-forgotten-password">-->
        <!--          <p class="text -subheadline">-->
        <!--            Mot de passe oublié? Réinitialise le-->
        <!--            <span class="text -subheadline -bold color-primary&#45;&#45;600">ici</span>-->
        <!--          </p>-->
        <!--        </div>-->
      </div>
      <div class="login-footer">
        <DefaultButton
          :disabled="!meta.valid"
          :label="t('form.buttons.submit')"
          radius="rounded"
        />
        <!--        <div class="register-redirection">-->
        <!--          <p class="text -subheadline">-->
        <!--            Pas encore membre ?-->
        <!--            <span class="text -subheadline -bold color-primary&#45;&#45;600"-->
        <!--              >Rejoins nous :)</span-->
        <!--            >-->
        <!--          </p>-->
        <!--        </div>-->
      </div>
    </form>
    <img
      class="login-background"
      src="https://thumbs.dreamstime.com/b/broken-shoes-skateboard-holes-patch-torn-skateboarding-165752519.jpg"
      alt="login background"
    />
  </div>
</template>

<script setup lang="ts">
import InputField from "@/common/component-library/form/InputField.vue";
import DefaultButton from "@/common/component-library/button/DefaultButton.vue";
import { object, string } from "yup";
import { useForm } from "vee-validate";
import { useI18n } from "vue-i18n";
import { inject } from "vue";
import AuthService from "@/auth/primary/AuthService";

const { t } = useI18n();
const authService = inject("authService") as AuthService;

const schema = object({
  email: string()
    .required(t("form.inputs.email.errors.required"))
    .email(t("form.inputs.email.errors.required")),
  password: string().required(t("form.inputs.password.errors.required")),
});
const { meta, values } = useForm({
  validationSchema: schema,
});

const login = () => {
  console.log(authService);
  console.log(values);
  authService.authenticate(values.email, values.password);
};
</script>

<style lang="scss">
.login {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 8rem;

  form {
    width: 100%;
  }

  &-header {
    text-align: center;
    width: 100%;
  }

  &-body {
    margin: 4rem auto 2rem;
    display: flex;
    max-width: 29rem;
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }

  &-footer {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  &-background {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    z-index: -1;
    width: 100%;
    opacity: 0.5;
  }
}
</style>

<i18n src="./i18n/login.json"></i18n>
