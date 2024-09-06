import { PartialType } from '@nestjs/mapped-types';
import { CreateActualDto } from './create-actual.dto';

export class UpdateActualDto extends PartialType(CreateActualDto) {}
