import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDtoLogin } from './dto/auth-dto-login';
import { AuthDtoRegister } from './dto/auth-dto-register';
import { userDtoResponse } from './dto/auth-dto-response';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('/login')
    login(
        @Body() body: AuthDtoLogin,
    ): Promise<{ user: userDtoResponse; token: string }> {
        return this.authService.login(body);
    }

    @Post('/register')
    @ApiResponse({ status: 201 })
    register(@Body() body: AuthDtoRegister): Promise<void> {
        return this.authService.register(body);
    }
}
