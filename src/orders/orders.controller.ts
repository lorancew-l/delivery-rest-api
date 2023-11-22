import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, UpdateOrderDto } from './orders.dto';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @ApiOperation({ summary: 'Create the order' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Fail' })
  @Post()
  @HttpCode(201)
  async createUser(@Body() order: CreateOrderDto) {
    try {
      return await this.orderService.createUser(order);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Get()
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @ApiOperation({ summary: 'Get the order' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Get(':orderId')
  async getUser(@Param('orderId') orderId: string) {
    return await this.orderService.getUser(orderId);
  }

  @ApiOperation({ summary: 'Update the order' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Fail' })
  @Put(':orderId')
  async updateUser(@Param('orderId') orderId: string, @Body() order: UpdateOrderDto) {
    try {
      return await this.orderService.updateUser(orderId, order);
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  @ApiOperation({ summary: 'Delete the order' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  @Delete(':orderId')
  async deleteUser(@Param('orderId') orderId: string) {
    return await this.orderService.deleteUser(orderId);
  }
}
