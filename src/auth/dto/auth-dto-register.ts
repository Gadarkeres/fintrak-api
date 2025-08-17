import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDtoRegister {
    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    name: string;
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })
    password: string;
}
