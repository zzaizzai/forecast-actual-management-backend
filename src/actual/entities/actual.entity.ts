import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('actual')
export class Actual extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

}
