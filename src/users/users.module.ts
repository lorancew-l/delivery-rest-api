import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  imports: [DatabaseModule],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
