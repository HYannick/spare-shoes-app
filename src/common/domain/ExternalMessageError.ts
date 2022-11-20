import { CustomError } from "ts-custom-error";
import type { MessageError } from "@/common/domain/MessageError";
import type { ErrorMessage } from "@/common/domain/ErrorMessage";

export class ExternalMessageError extends CustomError implements MessageError {
  constructor(private errorMessage: ErrorMessage) {
    super(errorMessage.type);
  }

  getType(): string {
    return this.errorMessage.type;
  }

  getMessage(): string {
    return this.errorMessage.message;
  }
}
