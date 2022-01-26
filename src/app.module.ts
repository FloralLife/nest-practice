import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from './configs/env.config';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [ConfigModule.forRoot(envConfig), TypeOrmModule.forRoot(typeORMConfig()), BoardsModule]
})
export class AppModule {}
