import { TransactionState } from './transactions/transactions.reducer';

export interface AppState {
  transactions: TransactionState;
}
