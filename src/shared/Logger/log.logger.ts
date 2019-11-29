import { LoggerService, Logger } from '@nestjs/common';

export class CustomeLogger implements LoggerService {
  log(message: string, trace: string) {
    Logger.log(message, trace);
  }
  error(message: string, trace: string) {
    Logger.error(message, trace);
  }
  test(message: string, trace: string) {
    Logger.error(message, trace);
  }
  warn(message: string) {
    Logger.warn(message);
  }
  debug(message: string) {
    Logger.debug(message);
  }
  verbose(message: string) {
    Logger.verbose(message);
  }
}
