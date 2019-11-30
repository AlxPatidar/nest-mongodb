import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Render,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { Logger } from '../shared/Logger/logger.decorator';
import { LoggerService } from '../shared/Logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Logger('AppService') private logger: LoggerService
  ) {}

  @Get('/404')
  @Render('404')
  root() {
    return { message: '404 Page not found' };
  }

  @Get()
  @Render('index')
  getHello() {
    this.logger.log('Hello world is working');
    return { message: this.appService.getHello() };
  }

  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    this.logger.debug(`file object ${file}`);
  }

  @Get()
  testMethod(): string {
    return 'All test pass!';
  }
}
