import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { SWAGGER_API_ENDPOINT } from './swagger/swagger.constant';
import { json, urlencoded } from 'body-parser';
import { setupSwagger } from './swagger';
import { RequestMethod, VersioningType } from '@nestjs/common';
import { API_PREFIX } from './constants/app.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix(API_PREFIX, {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });
  setupSwagger(app);
  const configService = app.get(ConfigService);
  
  // limit request size
  app.use(json({ limit: '30mb' }));
  app.use(urlencoded({ extended: true, limit: '30mb' }));

  await app.listen(configService.get<number>('PORT'));
  console.log(`http://127.0.0.1:${configService.get<number>('PORT')}${SWAGGER_API_ENDPOINT}`);
}

bootstrap().catch((error) => {
  console.log(error);
});

