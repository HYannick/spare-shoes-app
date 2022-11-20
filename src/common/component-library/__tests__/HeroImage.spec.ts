import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import HeroImage from "../image/HeroImage.vue";

// @vitest-environment jsdom
describe("HeroImage", () => {
  it("parse radius property", () => {
    const wrapper = shallowMount(HeroImage, {
      props: {
        src: "kortega.jpg",
        alt: "Kristin Ortega Picture",
        radius: "rounded",
      },
    });
    const component = wrapper.vm;

    expect(component.radiusClass).toBe("-rounded");
  });
});
