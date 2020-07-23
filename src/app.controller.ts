import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('App', 'getHello')
  getHello() {
    return { message: this.appService.getHello() };
  }
}
