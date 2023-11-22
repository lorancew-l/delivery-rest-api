import { ApiProperty } from '@nestjs/swagger';

import { User } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements Omit<User, 'id'> {
  @ApiProperty({ example: 'user@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'user' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'secure' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: 'ул. Мира, 32, Екатеринбург' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: '83233654865' })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}

export class UpdateUserDto implements Omit<User, 'id' | 'password'> {
  @ApiProperty({ example: 'user@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'user' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'ул. Мира, 32, Екатеринбург' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: '83233654865' })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
