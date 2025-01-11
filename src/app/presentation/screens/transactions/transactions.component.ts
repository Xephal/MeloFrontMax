import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TransactionsViewModel } from "./transactions.viewmodel";

@Component({
  selector: "app-transactions",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"]
})
export class TransactionsComponent {
  transactions$;
  editTransaction: any = null;

  constructor(public vm: TransactionsViewModel) {
    this.transactions$ = this.vm.transactions$;
  }

  selectTransaction(transaction: any): void {
    this.editTransaction = { ...transaction };
  }

  updateTransaction(transaction: any): void {
    this.vm.updateTransaction(transaction);
    this.editTransaction = null;
  }

  addTransaction(recipient: string, amount: number, reason: string): void {
    this.vm.addTransaction(recipient, amount, reason);
  }

  clearTransactions(): void {
    this.vm.clearTransactions();
  }
}
