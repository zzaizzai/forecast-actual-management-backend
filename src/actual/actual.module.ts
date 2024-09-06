import { Module } from '@nestjs/common';
import { ActualService } from './actual.service';
import { ActualController } from './actual.controller';

@Module({
  controllers: [ActualController],
  providers: [ActualService],
})
export class ActualModule {}
