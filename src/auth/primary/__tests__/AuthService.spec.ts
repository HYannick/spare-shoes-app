import AuthService from "../AuthService";
import { describe, beforeEach, it, expect, vi } from "vitest";
import type { AuthRepository } from "@/auth/domain/AuthRepository";

let authService: AuthService;

let loginUseCase: any;
let authRepository: AuthRepository;

const createLoginUseCase = () => ({
  execute: vi.fn(),
});

describe("Auth service", () => {
  beforeEach(() => {
    authRepository = {
      login: vi.fn(),
    };

    loginUseCase = createLoginUseCase();

    authService = new AuthService(authRepository);
    authService["loginUseCase"] = loginUseCase;
  });

  it("should trigger login use case", async () => {
    await authService.authenticate("kortega@gmail.com", "kortegapw");
    expect(loginUseCase.execute).toHaveBeenCalledWith(
      "kortega@gmail.com",
      "kortegapw"
    );
  });
});
