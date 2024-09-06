import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { ActualModule } from './actual/actual.module';
import { ForecastModule } from './forecast/forecast.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
    AuthModule,
    ActualModule,
    ForecastModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
