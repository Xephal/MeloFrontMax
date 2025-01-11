import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Transaction } from '../../../core/domain/transaction.entity';
import { TRANSACTION_REPOSITORY } from '../../../core/tokens/transaction-repository.token';
import { TransactionRepository } from '../../../data/repository/transaction.repository';
import { deleteTransaction } from 'src/app/core/store/transactions/transactions.actions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsViewModel {
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  transactions$ = this.transactionsSubject.asObservable();

  constructor(
    @Inject(TRANSACTION_REPOSITORY) private transactionRepository: TransactionRepository
  ) {
    this.loadTransactions();
  }

  addTransaction(recipient: string, amount: number, reason: string): void {
    const newTransaction = new Transaction(
      this.generateId(),
      recipient,
      amount,
      reason,
      new Date()
    );

    this.transactionRepository.add(newTransaction).subscribe(() => {
      this.loadTransactions(); // Recharge les transactions après ajout
    });
  }

  updateTransaction(transaction: Transaction): void {
    this.transactionRepository.update(transaction).subscribe(() => {
      this.loadTransactions(); // Recharge les transactions après modification
    });
  }

  deleteTransaction(id: string): void {
    this.transactionRepository.delete(id).subscribe(() => {
      this.loadTransactions();
    });
  }

  clearTransactions(): void {
    this.transactionRepository.clearAll(); // Vide le LocalStorage ou la source de données
    this.transactionsSubject.next([]); // Vide les transactions affichées
  }

  private loadTransactions(): void {
    this.transactionRepository.getAll().subscribe((transactions: Transaction[]) => {
      this.transactionsSubject.next(transactions);
    });
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
