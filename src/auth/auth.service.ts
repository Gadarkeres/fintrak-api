import { Injectable } from '@nestjs/common';
import { AuthDtoRequest } from './dto/auth-dto-request';

@Injectable()
export class AuthService {
    login(body: AuthDtoRequest): { token: string } {
        console.log(body);

        return { token: '1234' };
    }
}
