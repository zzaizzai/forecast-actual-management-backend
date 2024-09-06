import { Injectable } from '@nestjs/common';
import { CreateActualDto } from './dto/create-actual.dto';
import { UpdateActualDto } from './dto/update-actual.dto';

@Injectable()
export class ActualService {
  create(createActualDto: CreateActualDto) {
    return 'This action adds a new actual';
  }

  findAll() {
    return `This action returns all actual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actual`;
  }

  update(id: number, updateActualDto: UpdateActualDto) {
    return `This action updates a #${id} actual`;
  }

  remove(id: number) {
    return `This action removes a #${id} actual`;
  }
}
