import { Transaction } from '../domain/transaction.entity';
import { TransactionRepository } from '../../data/repository/transaction.repository';

export class DeleteTransactionUseCase {
    constructor(private transactionRepository: TransactionRepository) {}

    execute(id: string): void {
        this.transactionRepository.delete(id);
    }
}