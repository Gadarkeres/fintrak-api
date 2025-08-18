import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoLogin } from './dto/auth-dto-login';
import { AuthService } from './auth.service';
import { AuthDtoRegister } from './dto/auth-dto-register';
import { userDtoResponse } from './dto/auth-dto-response';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('/login')
    login(@Body() body: AuthDtoLogin): { token: string } {
        return this.authService.login(body);
    }

    @Post('/register')
    @ApiResponse({ status: 201, type: userDtoResponse })
    register(@Body() body: AuthDtoRegister): Promise<userDtoResponse> {
        return this.authService.register(body);
    }
}
