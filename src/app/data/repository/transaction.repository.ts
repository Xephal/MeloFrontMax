import { Observable } from 'rxjs';
import { Transaction } from '../../core/domain/transaction.entity';

export interface TransactionRepository {
  getAll(): Observable<Transaction[]>;
  add(transaction: Transaction): Observable<Transaction>;
  update(transaction: Transaction): Observable<Transaction>;
  delete(id:string): Observable<void>;
  clearAll(): void;
}
