import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create the user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Fail' })
  @Post()
  @HttpCode(201)
  async createUser(@Body() user: CreateUserDto) {
    try {
      return await this.userService.createUser(user);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiQuery({ name: 'withOrder', required: false, type: 'string' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Get()
  async getUsers(@Query('withOrder') withOrder?: 'true' | 'false') {
    return await this.userService.getUsers(withOrder === 'true');
  }

  @ApiOperation({ summary: 'Get the user' })
  @ApiQuery({ name: 'withOrder', required: false, type: 'string' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Get(':userId')
  async getUser(@Param('userId') userId: string, @Query('withOrder') withOrder?: 'true' | 'false') {
    return await this.userService.getUser(userId, withOrder === 'true');
  }

  @ApiOperation({ summary: 'Update the user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Fail' })
  @Put(':userId')
  async updateUser(@Param('userId') userId: string, @Body() user: UpdateUserDto) {
    try {
      return await this.userService.updateUser(userId, user);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @ApiOperation({ summary: 'Delete the user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    return await this.userService.deleteUser(userId);
  }
}
