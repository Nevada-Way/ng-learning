import { Component, inject } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataService = inject(DataService);
  cardsPack = this.dataService.getAllCards();

  ngOnInit() {
    console.log(this.cardsPack);
  }
}
