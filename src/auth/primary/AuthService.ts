import { LoginUseCase } from "@/auth/primary/use-case/LoginUseCase";
import type { AuthRepository } from "@/auth/domain/AuthRepository";

export default class AuthService {
  private loginUseCase: LoginUseCase;

  constructor(private readonly authRepository: AuthRepository) {
    this.loginUseCase = new LoginUseCase(authRepository);
  }

  async authenticate(email: string, password: string): Promise<void> {
    return this.loginUseCase.execute(email, password);
  }
}
