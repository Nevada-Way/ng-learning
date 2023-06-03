import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customerName = '';
  transactionDate = '';
  transactionPayment = '';

  onNameChange(name: string) {
    this.customerName = name;
  }

  onDateChange(date: string) {
    this.transactionDate = date;
  }

  onPaymentAmountChange(paymentAnount: string) {
    this.transactionPayment = paymentAnount;
  }
}
