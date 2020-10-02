import { Entity, Property } from '@mikro-orm/core';

import { BaseEntity } from './BaseEntity';

@Entity()
export class Car extends BaseEntity {

  @Property()
  marque: string;

  @Property()
  number: string;

  constructor(marque: string, number: string) {
    super();
    this.marque = marque;
    this.number = number;
  }

}
