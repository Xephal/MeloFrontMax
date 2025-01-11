import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Transaction } from "../../core/domain/transaction.entity";
import { TransactionRepository } from "./transaction.repository";
import { LocalStorageService } from "../../core/services/local-storage.service";

@Injectable({
  providedIn: "root",
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

  update(transaction: Transaction): Observable<Transaction> {
    const transactions = this.localStorageService.getTransactions();
    const index = transactions.findIndex((t) => t.id === transaction.id);
    if (index !== -1) {
      transactions[index] = transaction;
      this.localStorageService.saveAllTransactions(transactions);
    }
    return of(transaction); // Return updated transaction
  }

  delete(id: string): Observable<void> {
    this.localStorageService.deleteTransaction(id);
    return of()
  }

  clearAll(): void {
    this.localStorageService.clearTransactions();
  }
}
