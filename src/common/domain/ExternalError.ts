import { CustomError } from 'ts-custom-error';

export class ExternalError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}
