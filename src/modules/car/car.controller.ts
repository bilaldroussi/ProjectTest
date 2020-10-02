import { Get, Controller, Post, Put, HttpStatus, HttpException, Param, Body } from '@nestjs/common';
import { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import {Car} from "../../entities/Car";

@Controller('car')
export class CarController {

  constructor(@InjectRepository(Car) private readonly carRepository: EntityRepository<Car>) { }

  @Get()
  async find() {
    return await this.carRepository.findAll();
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    const car = await this.carRepository.findOne(+id, ['books']);

    if (!car) {
      throw new HttpException('Author not found', HttpStatus.NOT_FOUND);
    }

    return car;
  }

  @Post()
  async create(@Body() body: any) {
    if (!body.marque || !body.number  ) {
      throw new HttpException('One of `name, email` is missing', HttpStatus.BAD_REQUEST);
    }

    const car = new Car(body.marque, body.number );
    wrap(car).assign(body);
    await this.carRepository.persist(car);

    return car;
  }

  @Put(':id')
  async update(@Param() id: string, @Body() body: any) {
    const car = await this.carRepository.findOne(+id);

    if (!car) {
      throw new HttpException('Car not found', HttpStatus.NOT_FOUND);
    }

    wrap(car).assign(body);
    await this.carRepository.persist(car);

    return car;
  }

}
