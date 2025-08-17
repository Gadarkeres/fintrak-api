import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDtoLogin {
    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;
    @IsNotEmpty({ message: 'Senha não pode estar vazia!' })
    password: string;
}
