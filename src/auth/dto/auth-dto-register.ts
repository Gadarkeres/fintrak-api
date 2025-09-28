import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDtoRegister {
    @ApiProperty()
    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    name: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })
    password: string;
}
