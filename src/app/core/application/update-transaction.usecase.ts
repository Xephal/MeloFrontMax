import { Transaction } from '../domain/transaction.entity';
import { TransactionRepository } from '../../data/repository/transaction.repository';

export class UpdateTransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  execute(updatedTransaction: Transaction): void {
    this.transactionRepository.update(updatedTransaction);
  }
}
