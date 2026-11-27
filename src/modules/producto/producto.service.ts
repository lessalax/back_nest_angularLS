import { Injectable } from '@nestjs/common';
import { CreateproductoDto } from './dto/create-producto.dto.js';
import { UpdateproductoDto } from './dto/update-producto.dto.js';

@Injectable()
export class productoService {
  create(createproductoDto: CreateproductoDto) {
    return 'This action adds a new producto';
  }

  findAll() {
    return `This action returns all producto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateproductoDto: UpdateproductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
