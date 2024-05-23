import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrl: './admin-sidenav.component.css'
})
export class AdminSidenavComponent {
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
