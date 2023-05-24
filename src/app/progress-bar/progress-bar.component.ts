import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() progressPercent: string = '0';
  progressStep = 10;

  subtractProgress(): string {
    var newPercent: number = parseInt(this.progressPercent) - this.progressStep;
    if (newPercent < 0) {
      newPercent = 0;
    }
    this.progressPercent = newPercent + '';
    console.log('newProgress = ' + this.progressPercent);
    return this.progressPercent;
  }

  addProgress(): string {
    var newPercent: number = parseInt(this.progressPercent) + this.progressStep;
    if (newPercent > 100) {
      newPercent = 100;
    }
    this.progressPercent = newPercent + '';
    return this.progressPercent;
  }
}
