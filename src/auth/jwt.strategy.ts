import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository
    ) {
        super({
            secretOrKey: 'goodluck',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload) {
        const { username } = payload;
        console.log("payload", payload)
        const user: User = await this.userRepository.findOneBy({ username });

        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}