import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDtoLogin } from './dto/auth-dto-login';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDtoRegister } from './dto/auth-dto-register';
import { userDtoResponse } from './dto/auth-dto-response';
import * as bycrpt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) {}
    login(body: AuthDtoLogin): { token: string } {
        console.log(body);
        return { token: '1234' };
    }

    async register(body: AuthDtoRegister): Promise<userDtoResponse> {
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
        const { ID_USUARIO, NM_USUARIO, CD_LOGIN, NR_SALDO } =
            await this.prismaService.user.create({
                data: {
                    CD_LOGIN: body.email,
                    CD_SENHA: hashedPassword,
                    NM_USUARIO: body.name,
                    NR_SALDO: 0,
                },
            });

        return {
            id: ID_USUARIO,
            balance: NR_SALDO,
            email: CD_LOGIN,
            name: NM_USUARIO as string,
        };
    }
}
