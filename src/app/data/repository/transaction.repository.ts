import { Observable } from 'rxjs';
import { Transaction } from '../../core/domain/transaction.entity';

export interface TransactionRepository {
  getAll(): Observable<Transaction[]>; // Retourne un Observable
  add(transaction: Transaction): Observable<Transaction>;
  clearAll(): void; // Ajoute cette méthode pour le LocalStorage
}
