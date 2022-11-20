import { describe, it, expect, vi } from "vitest";

import { shallowMount } from "@vue/test-utils";
import GreetingsView from "../GreetingsView.vue";
import { mockI18n } from "../../test-utils/i18n";

const mockPush = vi.fn();

vi.mock("vue-router/dist/vue-router.mjs", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// @vitest-environment jsdom
describe("GreetingsView", () => {
  it("redirect to login screen", async () => {
    const wrapper = shallowMount(GreetingsView, {
      global: {
        plugins: [mockI18n()],
      },
    });
    const component = wrapper.vm;
    await component.goToLogin();
    expect(mockPush).toHaveBeenCalledWith({ name: "login" });
  });

  it("redirect to register screen", async () => {
    const wrapper = shallowMount(GreetingsView, {
      global: {
        plugins: [mockI18n()],
      },
    });
    const component = wrapper.vm;
    await component.goToRegister();
    expect(mockPush).toHaveBeenCalledWith({ name: "register" });
  });
});
