import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../domain/transaction.entity';

export const addTransaction = createAction(
  '[Transactions] Add Transaction',
  props<{ transaction: Transaction }>()
);

export const loadTransactions = createAction('[Transactions] Load Transactions');

export const loadTransactionsSuccess = createAction(
  '[Transactions] Load Transactions Success',
  props<{ transactions: Transaction[] }>()
);
