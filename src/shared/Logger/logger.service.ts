import { Injectable, Scope, Logger } from '@nestjs/common';

@Injectable({
  // create a new instance on every call of LoggerService call
  scope: Scope.TRANSIENT,
})
export class LoggerService {
  private prefix?: string;

  log(message: string) {
    let formattedMessage = message;

    if (this.prefix) {
      formattedMessage = `[${this.prefix}] ${message}`;
    }
    Logger.verbose(formattedMessage);
  }
  error(message: string, trace: string) {
    let formattedMessage = message;

    if (this.prefix) {
      formattedMessage = `[${this.prefix}] ${message}`;
    }
    Logger.verbose(formattedMessage);
  }
  warn(message: string) {
    let formattedMessage = message;

    if (this.prefix) {
      formattedMessage = `[${this.prefix}] ${message}`;
    }
    Logger.verbose(formattedMessage);
  }
  debug(message: string) {
    let formattedMessage = message;

    if (this.prefix) {
      formattedMessage = `[${this.prefix}] ${message}`;
    }
    Logger.verbose(formattedMessage);
  }
  verbose(message: string) {
    let formattedMessage = message;

    if (this.prefix) {
      formattedMessage = `[${this.prefix}] ${message}`;
    }
    Logger.verbose(formattedMessage);
  }

  setPrefix(prefix: string) {
    this.prefix = prefix;
  }
}
