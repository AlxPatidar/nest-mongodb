import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from '@Logger/logger.service';
import { Logger } from '@Logger/logger.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Logger('AppService') private logger: LoggerService
  ) {}

  @Get()
  getHello(): string {
    this.logger.log('It is working now');
    return this.appService.getHello();
  }
}
