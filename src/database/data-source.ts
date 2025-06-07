import "reflect-metadata";
import { DataSource } from "typeorm";
import { Transaction } from '../entities/transaction';


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "987456",
    database: "contai",
    synchronize: true,
    logging: false,
    entities: [Transaction],
    migrations: [],
    subscribers: []
});