import type { BackendMessage } from "@/common/secondary/BackendMessage";
import { ExternalError } from "@/common/domain/ExternalError";
import type { ErrorMessage } from "@/common/domain/ErrorMessage";

export class BackendErrorMessage {
  private readonly errorMessage: ErrorMessage;
  constructor(private backendMessage?: BackendMessage) {
    if (
      !(backendMessage && backendMessage.message && backendMessage.errorType)
    ) {
      throw new ExternalError("Backend message is not available");
    }
    this.errorMessage = {
      type: backendMessage.errorType,
      message: backendMessage.message,
    };
  }

  public toDomain(): ErrorMessage {
    return this.errorMessage;
  }
}
