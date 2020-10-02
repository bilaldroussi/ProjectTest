import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { OrmModule } from '../orm/orm.module';

@Module({
  imports: [OrmModule],
  controllers: [CarController],
  providers: [],
})
export class CarModule {}
