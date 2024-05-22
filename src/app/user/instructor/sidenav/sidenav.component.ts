import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  app = new AppComponent();
  time = this.app.currTime;
  date = this.app.currDate;
  day = this.app.currDay;

  constructor(public router: Router) { 
    setInterval(() => {
      this.time = this.app.currTime;
      this.date = this.app.currDate;
      this.day = this.app.currDay;
      console.log(this.router.url);
    }, 1);
  }
}
