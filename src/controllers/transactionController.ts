import {Request, Response} from 'express';
import {TransactionService} from '../services/transactionService';

export class TransactionController {
    static async create(req: Request, res: Response) {
        try {
            const transaction = await TransactionService.create(req.body);
            return res.status(201).json(transaction)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({error: error.message});
            } else {
                return res.status(400).json({error: 'Unknown error occurred'})
            }
        }
    }

    static async getAll(req: Request, res: Response) {
        const transactions = await TransactionService.getAll();
        return res.json(transactions)
    }
}



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