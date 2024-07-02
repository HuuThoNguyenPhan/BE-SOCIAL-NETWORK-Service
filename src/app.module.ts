import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envValidator } from './common/validations';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: envValidator,
    }),
  ],
})
export class AppModule {}
