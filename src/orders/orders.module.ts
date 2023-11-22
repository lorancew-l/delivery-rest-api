import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  providers: [OrdersService],
  imports: [DatabaseModule],
  exports: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
