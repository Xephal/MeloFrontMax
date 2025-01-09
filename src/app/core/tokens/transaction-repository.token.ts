import { InjectionToken } from '@angular/core';
import { TransactionRepository } from '../../data/repository/transaction.repository';

export const TRANSACTION_REPOSITORY = new InjectionToken<TransactionRepository>('TransactionRepository');
