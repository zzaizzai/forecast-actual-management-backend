import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity('actual')
export class Actual extends BaseEntity {

    @PrimaryColumn('uuid')
    @Generated('uuid')
    uuid: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

}
