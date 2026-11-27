import { Module } from '@nestjs/common';
import { productoService } from './producto.service.js';
import { productoController } from './producto.controller.js';

@Module({
  controllers: [productoController],
  providers: [productoService],
})
export class productoModule {}
