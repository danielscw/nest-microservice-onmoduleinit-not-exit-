import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'

import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: ['app'],
      protoPath: ['./src/app.proto'],
      url: '0.0.0.0:3000'
    }
  })

  await app.listenAsync()
}
bootstrap().catch(err => {
  console.error(`Failed to initialize, due to ${err}`);
  process.exit(1)
});
