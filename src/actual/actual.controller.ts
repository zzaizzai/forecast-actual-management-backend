import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActualService } from './actual.service';
import { CreateActualDto } from './dto/create-actual.dto';
import { UpdateActualDto } from './dto/update-actual.dto';

@Controller('actual')
export class ActualController {
  constructor(private readonly actualService: ActualService) {}

  @Post()
  create(@Body() createActualDto: CreateActualDto) {
    return this.actualService.create(createActualDto);
  }

  @Get()
  findAll() {
    return this.actualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActualDto: UpdateActualDto) {
    return this.actualService.update(+id, updateActualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actualService.remove(+id);
  }
}
