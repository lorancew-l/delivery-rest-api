import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule, OrdersModule],
  controllers: [UsersController, OrdersController],
  providers: [],
})
export class AppModule {}
