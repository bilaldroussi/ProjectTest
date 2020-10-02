import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import {BaseEntity, Car, User} from './entities';

const logger = new Logger('MikroORM');
const config = {
  entities: [User, Car, BaseEntity],
  host:'localhost',
  dbName: 'orm-nest-mysql',
  database: 'orm-nest-mysql',
  type: 'mysql',
  port: 3308,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
} as Options;

export default config;
