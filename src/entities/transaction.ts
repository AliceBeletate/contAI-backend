import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


export enum TransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit',
}  


@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
 

@Column({type: 'date'})
date!: string;


@Column()
description!: string;


@Column('decimal', {precision: 12, scale: 2})
amount!: number;


@Column({type: 'enum', enum: TransactionType})
type!: TransactionType;

@CreateDateColumn()
createdAt!: Date;

@UpdateDateColumn()
updatedAt!: Date;


}



