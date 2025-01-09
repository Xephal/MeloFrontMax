import { Transaction } from '../domain/transaction.entity';
import { TransactionRepository } from '../../data/repository/transaction.repository';

export class AddTransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  execute(recipient: string, amount: number, reason: string): Transaction {
    const newTransaction = new Transaction(
      this.generateId(),
      recipient,
      amount,
      reason,
      new Date()
    );
    this.transactionRepository.add(newTransaction);
    return newTransaction;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Génère un ID unique
  }
}
