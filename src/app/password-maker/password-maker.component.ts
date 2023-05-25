import { Component } from '@angular/core';

@Component({
  selector: 'app-password-maker',
  templateUrl: './password-maker.component.html',
  styleUrls: ['./password-maker.component.scss'],
})
export class PasswordMakerComponent {
  myPassword = '';
  myLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onLengthInput(lengthInput: string) {
    const parsedValue = parseInt(lengthInput);
    if (!isNaN(parsedValue)) {
      this.myLength = parsedValue;
    }
    console.log('myLength = ' + this.myLength);
  }

  onChangeLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onGenerateClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*';
    this.myPassword = '';

    let chosenChars = '';

    if (this.useLetters) {
      chosenChars += letters;
    }
    if (this.useNumbers) {
      chosenChars += numbers;
    }
    if (this.useSymbols) {
      chosenChars += symbols;
    }

    for (let i = 0; i < this.myLength; i++) {
      this.myPassword +=
        chosenChars[Math.floor(Math.random() * chosenChars.length)];
    }
  }

  isDisabled() {
    //If all fields are empty then returns true
    if (this.myLength > 0) {
      return !(this.useLetters || this.useNumbers || this.useSymbols);
    } //Disable if no length input
    return true;
  }
}
