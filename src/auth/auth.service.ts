import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDtoLogin } from './dto/auth-dto-login';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDtoRegister } from './dto/auth-dto-register';
import * as bycrpt from 'bcryptjs';
import { userDtoResponse } from './dto/auth-dto-response';

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    login(
        body: AuthDtoLogin,
    ): Promise<{ user: userDtoResponse; token: string }> {
        console.log(body);
        return Promise.resolve({
            user: {
                name: 'test',
                email: 'test',
                id: 1,
                balance: 0,
                isLoggedIn: true,
            },
            token: 'test',
        });
    }

    async register(body: AuthDtoRegister): Promise<void> {
        const userAlreadyExists = await this.prismaService.user.findUnique({
            where: {
                CD_LOGIN: body.email,
            },
        });
        if (userAlreadyExists) {
            throw new UnauthorizedException(
                'Um usuário ja existe com esse login, por favor forneça outro e-mail.',
            );
        }
        const hashedPassword = await bycrpt.hash(body.password, 10);
        await this.prismaService.user.create({
            data: {
                CD_LOGIN: body.email,
                CD_SENHA: hashedPassword,
                NM_USUARIO: body.name,
                NR_SALDO: 0,
            },
        });
    }
}
