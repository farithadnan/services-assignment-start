import { Component } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private counterService: CounterService) { }

  resetAllCounter() {
    this.counterService.resetAllCounter();
  }
}
