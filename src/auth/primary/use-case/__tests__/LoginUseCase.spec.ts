import { describe, it, expect, vi } from "vitest";
import { LoginUseCase } from "../LoginUseCase";
import type { AuthRepository } from "@/auth/domain/AuthRepository";
import type { AccessToken } from "@/auth/domain/AccessToken";

const mockJwtResponse: AccessToken = {
  access_token: "kortega-jwt-token",
};

const authRepo: AuthRepository = {
  login: vi.fn().mockResolvedValue({
    access_token: "kortega-jwt-token",
  }),
};

describe("Login use case", () => {
  it("should retrieve login info and call auth resource", async () => {
    const useCase = new LoginUseCase(authRepo);
    await useCase.execute("k.orthega@gmail.com", "kortegapw");
    expect(authRepo.login).toHaveBeenCalledWith(
      "k.orthega@gmail.com",
      "kortegapw"
    );
  });
});
