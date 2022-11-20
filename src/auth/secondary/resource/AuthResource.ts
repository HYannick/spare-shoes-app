import type { AuthRepository } from "@/auth/domain/AuthRepository";
import type { AccessToken } from "@/auth/domain/AccessToken";
import type { BackendCaller } from "@/common/secondary/BackendCaller";

const LOGIN_URL = "/auth/login";

export class AuthResource implements AuthRepository {
  constructor(private readonly backendCaller: BackendCaller) {}

  async login(email: string, password: string): Promise<AccessToken> {
    const { data } = await this.backendCaller.post<AccessToken>(LOGIN_URL, {
      email,
      password,
    });
    return data;
  }
}
