import { PartialType } from '@nestjs/swagger';
import { CreateproductoDto } from './create-producto.dto.js';

export class UpdateproductoDto extends PartialType(CreateproductoDto) {}
