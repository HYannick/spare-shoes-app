import type { AccessToken } from "@/auth/domain/AccessToken";

export interface AuthRepository {
  login(email: string, password: string): Promise<AccessToken>;
}
