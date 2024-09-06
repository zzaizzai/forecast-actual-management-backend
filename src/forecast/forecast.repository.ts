import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Forecast } from "./entities/forecast.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ForecastRepository extends Repository<Forecast> {

    constructor(
        @InjectRepository(Forecast)
        private repository: Repository<Forecast>
    ) {
        super(repository.target, repository.manager, repository.queryRunner)
    }
}