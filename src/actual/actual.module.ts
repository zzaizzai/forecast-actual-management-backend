import { Module } from '@nestjs/common';
import { ActualService } from './actual.service';
import { ActualController } from './actual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actual } from './entities/actual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actual])],
  controllers: [ActualController],
  providers: [ActualService],
})
export class ActualModule {}
