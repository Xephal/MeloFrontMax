import { createReducer, on, State } from '@ngrx/store';
import { addTransaction, deleteTransaction, loadTransactionsSuccess, updateTransaction } from './transactions.actions';
import { Transaction } from '../../domain/transaction.entity';

export interface TransactionState {
  transactions: Transaction[];
}

export const initialState: TransactionState = {
  transactions: []
};

export const transactionsReducer = createReducer(
  initialState,
  on(addTransaction, (state, { transaction }) => ({
    ...state,
    transactions: [...state.transactions, transaction]
  })),
  on(loadTransactionsSuccess, (state, { transactions }) => ({
    ...state,
    transactions
  })),
  on(updateTransaction, (state, { transaction }) => ({
    ...state,
    transactions: state.transactions.map(t => t.id === transaction.id ? transaction : t)
  })),
  on(deleteTransaction, (state, { id }) => ({
    ...state,
    transactions: state.transactions.filter(transaction => transaction.id !==id)
  }))
);
