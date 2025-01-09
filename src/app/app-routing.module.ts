import { Routes } from '@angular/router';
import { TransactionsComponent } from './presentation/screens/transactions/transactions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  { path: 'transactions', component: TransactionsComponent }
];
