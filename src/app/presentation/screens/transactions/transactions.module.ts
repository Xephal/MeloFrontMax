import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';

@NgModule({
  imports: [CommonModule, TransactionsComponent], // Importer directement le composant standalone
})
export class TransactionsModule {}
