import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('forecast')
export class Forecast extends BaseEntity {

    @PrimaryColumn('uuid')
    @Generated('uuid')
    uuid: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

}
