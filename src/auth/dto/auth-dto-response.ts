import { ApiProperty } from '@nestjs/swagger';

export class userDtoResponse {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    id: number;
    @ApiProperty()
    balance: number;
    @ApiProperty()
    isLoggedIn: boolean;
}
