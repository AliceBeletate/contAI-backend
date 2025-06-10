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
exports.TransactionController = void 0;
const transactionService_1 = require("../services/transactionService");
class TransactionController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = yield transactionService_1.TransactionService.create(req.body);
                return res.status(201).json(transaction);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).json({ error: error.message });
                }
                else {
                    return res.status(400).json({ error: 'Unknown error occurred' });
                }
            }
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = yield transactionService_1.TransactionService.getAll();
            return res.json(transactions);
        });
    }
}
exports.TransactionController = TransactionController;
/* Cliente envia requisição para /transactions.

transaction.routes.ts passa para TransactionController.

TransactionController:
➡️ Recebe a requisição.
➡️ Chama o TransactionService.
➡️ Responde para o cliente com resultado ou erro.





if (error instanceof Error) {
➡️ Checa se o error é de fato um objeto Error do JavaScript.

➡️ Se sim, podemos acessar com segurança:
error.message.*/ 
