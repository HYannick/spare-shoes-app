import { CustomError } from "ts-custom-error";
import type { MessageError } from "./MessageError";
import type { ErrorMessage } from "@/common/domain/ErrorMessage";

export class NotFound extends CustomError implements MessageError {
  constructor(private errorMessage: ErrorMessage) {
    super(errorMessage.type);
  }

  getMessage(): string {
    return this.errorMessage.message;
  }

  getType(): string {
    return this.errorMessage.type;
  }
}
