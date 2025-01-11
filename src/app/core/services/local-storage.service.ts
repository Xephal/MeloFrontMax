import { Injectable } from "@angular/core";
import { Transaction } from "../domain/transaction.entity";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private readonly key = "transactions";

  getTransactions(): Transaction[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  saveTransaction(transaction: Transaction): void {
    const transactions = this.getTransactions();
    transactions.push(transaction);
    localStorage.setItem(this.key, JSON.stringify(transactions));
  }

  saveAllTransactions(transactions: Transaction[]): void {
    localStorage.setItem(this.key, JSON.stringify(transactions));
  }

  clearTransactions(): void {
    localStorage.removeItem(this.key);
  }
}
