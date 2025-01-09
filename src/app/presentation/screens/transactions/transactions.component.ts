import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsViewModel } from './transactions.viewmodel';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions$;

  constructor(private vm: TransactionsViewModel) {
    this.transactions$ = this.vm.transactions$;
  }

  addTransaction(recipient: string, amount: number, reason: string): void {
    this.vm.addTransaction(recipient, amount, reason);
  }

  clearTransactions(): void {
    this.vm.clearTransactions();
  }  
}
