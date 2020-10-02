import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import {BaseEntity, Car, User} from '../../entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature(
        [User, Car]
    //     {
    //   entities: [BaseEntity, User, Car],
    // }
    ),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule { }
