import type { AuthRepository } from "@/auth/domain/AuthRepository";
import type { UseCase } from "@/common/primary/UseCase";

export class LoginUseCase implements UseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string, password: string) {
    await this.authRepository.login(email, password);
  }
}
