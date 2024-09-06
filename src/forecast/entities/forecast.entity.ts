import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('forecast')
export class Forecast extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
}
