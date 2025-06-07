import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


export enum TransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit',
}   // enum é uma lista de opçoes que o campo pode ter


@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  // com @decorators essa classe representa uma tabela no banco de dados, cada objeto dessa classe será um registro(linha) na tabela transactions.
  //O id é uma chave primária e o uuid vai criar automaticamente o valor como um código unico longo

@Column({type: 'date'})
date!: string;
// guarda a data como string (yyyy-mm-dd)

@Column()
description!: string;
// descrição do lançamento o @column() indica que é uma coluna padrão no banco

@Column('decimal', {precision: 12, scale: 2})
amount!: number;
// aqui guarda os numeros decimais, com max 12 digitos e 2 apos a virgula

@Column({type: 'enum', enum: TransactionType})
type!: TransactionType;
// campo do tipo de lançamento, pegamos um valor da lista que criamos (credit ou debit)

@CreateDateColumn()
createdAt!: Date;
// data de criação do registro

@UpdateDateColumn()
updatedAt!: Date;
// data da ultima autalização

}



// foi usado ! (non null assertion operator) para garantir que elas serao inicializadas quando o objeto for criado a partir do banco de dados