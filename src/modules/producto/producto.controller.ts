import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { productoService } from './producto.service.js';
import { CreateproductoDto } from './dto/create-producto.dto.js';
import { UpdateproductoDto } from './dto/update-producto.dto.js';

@Controller('producto')
export class productoController {
  constructor(private readonly productoService: productoService) {}

  @Post()
  create(@Body() createproductoDto: CreateproductoDto) {
    return this.productoService.create(createproductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateproductoDto: UpdateproductoDto) {
    return this.productoService.update(+id, updateproductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
