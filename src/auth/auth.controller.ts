import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoLogin } from './dto/auth-dto-login';
import { AuthService } from './auth.service';
import { AuthDtoRegister } from './dto/auth-dto-register';
import { userResponse } from './dto/auth-dto-response';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('/login')
    login(@Body() body: AuthDtoLogin): { token: string } {
        return this.authService.login(body);
    }

    @Post('/register')
    register(@Body() body: AuthDtoRegister): Promise<userResponse> {
        return this.authService.register(body);
    }
}
