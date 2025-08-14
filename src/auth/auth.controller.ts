import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoRequest } from './dto/auth-dto-request';

@Controller('auth')
export class AuthController {
    @Post('/login')
    login(@Body() body: AuthDtoRequest): { token: string } {
        console.log(body);
        return { token: 'teste' };
    }

    @Post('/register')
    register(): null {
        return null;
    }
}
