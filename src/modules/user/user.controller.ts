import { Get, Controller, Post, Put, HttpStatus, HttpException, Param, Body } from '@nestjs/common';
import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import {User} from '../../entities';

@Controller('user')
export class UserController {

  constructor(@InjectRepository(User) private readonly userRepository: EntityRepository<User>) { }

  @Get()
  async find() {
    return await this.userRepository.findAll();
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    const user = await this.userRepository.findOne(+id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  @Post()
  async create(@Body() body: any) {
    if (!body.name || !body.email  || !body.lastName) {
      throw new HttpException('One of `name, email, lastname` is missing', HttpStatus.BAD_REQUEST);
    }

    const user = new User(body.name, body.lastName, body.email);
    wrap(user).assign(body);
    await this.userRepository.persist(user);

    return user;
  }

  @Put(':id')
  async update(@Param() id: string, @Body() body: any) {
    const user = await this.userRepository.findOne(+id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    wrap(user).assign(body);
    await this.userRepository.persist(user);

    return user;
  }

}
