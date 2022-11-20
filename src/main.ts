import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import axios from "axios";
import { BackendCaller } from "@/common/secondary/BackendCaller";
import { AuthResource } from "@/auth/secondary/resource/AuthResource";
import AuthService from "@/auth/primary/AuthService";
import { i18n } from "@/i18n";

const backendAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const app = createApp(App);
const backendCaller = new BackendCaller(backendAxiosInstance);

const authResource = new AuthResource(backendCaller);
const authService = new AuthService(authResource);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.provide("authService", authService);
app.mount("#app");
