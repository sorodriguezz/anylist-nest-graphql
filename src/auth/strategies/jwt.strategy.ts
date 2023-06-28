import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_SECRET'), //firma del token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //donde viene el token
    });
  }

  async validate(payload: any): Promise<User> {
    console.log({ payload });
    throw new UnauthorizedException('Token not valid :(');
  }
}
