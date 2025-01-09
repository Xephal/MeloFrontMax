import { Transaction } from 'src/app/core/domain/transaction.entity';

export class TransactionApiDatasource {
  private transactions: Transaction[] = [];

  async add(transaction: Transaction): Promise<Transaction> {
    this.transactions.push(transaction);
    return transaction;
  }

  async getAll(): Promise<Transaction[]> {
    return this.transactions;
  }
}
