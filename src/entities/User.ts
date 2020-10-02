import { Entity, Property } from '@mikro-orm/core';

import { BaseEntity } from './BaseEntity';

@Entity()
export class User extends BaseEntity {

  @Property()
  name: string;

  @Property()
  lastName: string;

  @Property()
  email: string;

  @Property()
  age?: number;

  constructor(name: string, lastName: string, email: string) {
    super();
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }

}
