import { Injectable } from '@nestjs/common';
import { AuthDtoRequest } from './dto/auth-dto-request';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {}
    login(body: AuthDtoRequest): { token: string } {
        console.log(body);
        return { token: '1234' };
    }
}
