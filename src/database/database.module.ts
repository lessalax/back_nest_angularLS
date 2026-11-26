import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module.js';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT'),
        username: config.get('USERNAME'),
        password: config.get('PASSWORD'),
        database: config.get('DATABASE'),
        entities: [import.meta.dirname + '/../**/*.entity{.ts,.js}'],
      }),
    }),
  ],
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider],
})
export class DatabaseModule {}