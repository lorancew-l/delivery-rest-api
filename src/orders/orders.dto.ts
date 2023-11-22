import { ApiProperty } from '@nestjs/swagger';

import { Order, OrderStatus, PaymentMethod } from '@prisma/client';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { OrderStatusValidator, PaymentMethodValidator } from './validators';

export class CreateOrderDto implements Omit<Order, 'id' | 'orderDate'> {
  @ApiProperty({ example: 'ул. Мира, 32, Екатеринбург' })
  @IsNotEmpty()
  @IsString()
  deliveryAddress: string;

  @ApiProperty({ example: 'card' })
  @IsNotEmpty()
  @Validate(PaymentMethodValidator)
  paymentMethod: PaymentMethod;

  @ApiProperty({ example: 'processing' })
  @IsNotEmpty()
  @Validate(OrderStatusValidator)
  status: OrderStatus;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;
}

export class UpdateOrderDto implements Omit<Order, 'id' | 'orderDate' | 'userId'> {
  @ApiProperty({ example: 'ул. Мира, 32, Екатеринбург' })
  @IsNotEmpty()
  @IsString()
  deliveryAddress: string;

  @ApiProperty({ example: 'cash' })
  @IsNotEmpty()
  @Validate(PaymentMethodValidator)
  paymentMethod: PaymentMethod;

  @ApiProperty({ example: 'delivered' })
  @IsNotEmpty()
  @Validate(OrderStatusValidator)
  status: OrderStatus;
}
