import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto, UpdateUserDto } from './users.dto';

const userSecureSelect = {
  username: true,
  email: true,
  id: true,
  address: true,
  phoneNumber: true,
} satisfies Omit<Record<keyof User, boolean>, 'password'>;

@Injectable()
export class UsersService {
  private salt: number;

  constructor(private databaseService: DatabaseService, configService: ConfigService) {
    this.salt = Number(configService.get('BCRYPT_SALT'));
  }

  async createUser(user: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(user.password, this.salt);

    return this.databaseService.user.create({ data: { ...user, password: hashedPassword }, select: userSecureSelect });
  }

  async getUser(userId: string, withOrder: boolean) {
    return this.databaseService.user.findUnique({
      where: { id: userId },
      select: { ...userSecureSelect, ...(withOrder && { Order: true }) },
    });
  }

  async getUsers(withOrder: boolean) {
    return this.databaseService.user.findMany({ select: { ...userSecureSelect, ...(withOrder && { Order: true }) } });
  }

  async deleteUser(userId: string) {
    return this.databaseService.user.delete({ where: { id: userId }, select: userSecureSelect });
  }

  async updateUser(userId: string, user: UpdateUserDto) {
    return this.databaseService.user.update({ where: { id: userId }, data: user, select: userSecureSelect });
  }
}
