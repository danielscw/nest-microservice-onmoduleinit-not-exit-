import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  async onModuleInit() {
    throw new Error('error')
  }

  getHello(): string {
    return 'Hello World!';
  }
}
