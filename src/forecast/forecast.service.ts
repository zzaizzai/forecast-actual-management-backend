import { Injectable } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Forecast } from './entities/forecast.entity';
import { ForecastRepository } from './forecast.repository';

@Injectable()
export class ForecastService {

  constructor(
    @InjectRepository(Forecast)
    private forecastRepository: ForecastRepository
  ){}

  create(createForecastDto: CreateForecastDto) {
    const result = this.create({good: "good"})
    return 'This action adds a new forecast';
  }

  findAll() {
    this.forecastRepository.findOneBy({'uuid': '1'})
    return `This action returns all forecast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forecast`;
  }

  update(id: number, updateForecastDto: UpdateForecastDto) {
    return `This action updates a #${id} forecast`;
  }

  remove(id: number) {
    return `This action removes a #${id} forecast`;
  }
}
