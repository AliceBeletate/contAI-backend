"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const data_source_1 = require("../database/data-source");
const transaction_1 = require("../entities/transaction");
const validators_1 = require("../utils/validators");
class TransactionService {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof data.date !== 'string' ||
                typeof data.description !== 'string' ||
                typeof data.amount !== 'number' ||
                (data.type !== 'credit' && data.type !== 'debit')) {
                throw new Error('Missing or invalid fields');
            }
            const validation = (0, validators_1.validateTransaction)({
                date: data.date,
                description: data.description,
                amount: data.amount,
                type: data.type,
            });
            if (!validation.isValid) {
                throw new Error(validation.errors.join(', '));
            }
            const transactionRepo = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
            const newTransaction = transactionRepo.create(Object.assign(Object.assign({}, data), { amount: Number(data.amount) }));
            return yield transactionRepo.save(newTransaction);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionRepo = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
            return yield transactionRepo.find();
        });
    }
}
exports.TransactionService = TransactionService;
