import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  public now: Date = new Date();
  time = this.now.toLocaleTimeString('en-US');
  date = this.now.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
  day = this.now.toLocaleString('default', { weekday: 'long' });

    constructor() {
        setInterval(() => {
          this.now = new Date();
          this.time = this.now.toLocaleTimeString('en-US');
          this.date = this.now.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
          this.day = this.now.toLocaleString('default', { weekday: 'long' });
        }, 1);
    }
  
  public get currTime() {
    return this.time;
  }

  public get currDate() {
    return this.date;
  }

  public get currDay() {
    return this.day;
  }
}
