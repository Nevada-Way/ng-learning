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
  convertedMiles = 0;

  onNameChange(name: string) {
    this.customerName = name;
  }

  onDateChange(date: string) {
    this.transactionDate = date;
  }

  onPaymentAmountChange(paymentAnount: string) {
    this.transactionPayment = paymentAnount;
  }
  
  onMilesChange(milesToConvert: string) {
    this.convertedMiles = parseInt(milesToConvert);
    console.log(`this.convertedMiles = ${this.convertedMiles}`);
  }
}
