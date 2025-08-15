import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoRequest } from './dto/auth-dto-request';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
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
