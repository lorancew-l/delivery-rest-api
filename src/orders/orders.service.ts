import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateOrderDto, UpdateOrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(private databaseService: DatabaseService) {}

  async createUser(order: CreateOrderDto) {
    return this.databaseService.order.create({ data: order });
  }

  async getUser(orderId: string) {
    return this.databaseService.order.findUnique({ where: { id: orderId } });
  }

  async getOrders() {
    return this.databaseService.order.findMany();
  }

  async deleteUser(orderId: string) {
    return this.databaseService.order.delete({ where: { id: orderId } });
  }

  async updateUser(orderId: string, order: UpdateOrderDto) {
    return this.databaseService.order.update({ where: { id: orderId }, data: order });
  }
}
