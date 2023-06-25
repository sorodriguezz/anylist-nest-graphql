import { Injectable } from '@nestjs/common';
import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';

@Injectable()
export class AuthService {
  constructor() {}

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    console.log({ signupInput });
    throw new Error('No implementado');
  }

  async login() {}

  async revalidateToken() {}
}
