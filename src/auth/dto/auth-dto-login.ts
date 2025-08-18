import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDtoLogin {
    @ApiProperty()
    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'Senha não pode estar vazia!' })
    password: string;
}
