import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity.js';
import { PedidoProducto } from './pedidoproducto.entity.js';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  estado: number;

  @Column()
  observaciones: string;

  @ManyToOne(() => Cliente)
  cliente: Relation<Cliente>;

  @OneToMany(() => PedidoProducto, (pedprod) => pedprod.pedido)
  pedidoProducto: Relation<PedidoProducto[]>;
}