import { Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity.js';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  detalle: string;

  @OneToMany(() => Producto, (prod) => prod.categoria)
  producto: Relation<Producto[]>;
}