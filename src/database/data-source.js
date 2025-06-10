"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const transaction_1 = require("../entities/transaction");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "987456",
    database: "contai",
    synchronize: true,
    logging: false,
    entities: [transaction_1.Transaction],
    migrations: [],
    subscribers: []
});
