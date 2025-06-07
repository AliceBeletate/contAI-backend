import { AppDataSource } from '../database/data-source';
import { Transaction } from '../entities/transaction';
import { validateTransaction } from '../utils/validators';

export class TransactionService {
    static async create(data: Partial<Transaction>) {
        if (
            typeof data.date !== 'string' ||
            typeof data.description !== 'string' ||
            typeof data.amount !== 'number' ||
            (data.type !== 'credit' && data.type !== 'debit')
        ) {
            throw new Error('Missing or invalid fields');
        }

        const validation = validateTransaction({
            date: data.date,
            description: data.description,
            amount: data.amount,
            type: data.type,
        });

        if (!validation.isValid) {
            throw new Error(validation.errors.join(', '));
        }

        const transactionRepo = AppDataSource.getRepository(Transaction);

        const newTransaction = transactionRepo.create({
            ...data,
            amount: Number(data.amount),
        });

        return await transactionRepo.save(newTransaction);
    }

    static async getAll() {
        const transactionRepo = AppDataSource.getRepository(Transaction);
        return await transactionRepo.find();
    }
}
