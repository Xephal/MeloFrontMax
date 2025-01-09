import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../../core/domain/transaction.entity';
import { TransactionRepository } from './transaction.repository';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionRepositoryImpl implements TransactionRepository {
  constructor(private localStorageService: LocalStorageService) {}

  getAll(): Observable<Transaction[]> {
    return of(this.localStorageService.getTransactions());
  }

  add(transaction: Transaction): Observable<Transaction> {
    this.localStorageService.saveTransaction(transaction);
    return of(transaction);
  }

  clearAll(): void {
    this.localStorageService.clearTransactions();
  }  
}
