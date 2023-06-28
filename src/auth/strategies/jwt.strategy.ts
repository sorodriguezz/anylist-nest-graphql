import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_SECRET'), //firma del token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //donde viene el token
    });
  }
}
