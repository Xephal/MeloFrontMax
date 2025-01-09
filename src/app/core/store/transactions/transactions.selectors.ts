import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionState } from './transactions.reducer';

export const selectTransactionState = createFeatureSelector<TransactionState>('transactions');

export const selectAllTransactions = createSelector(
  selectTransactionState,
  (state) => state.transactions
);
