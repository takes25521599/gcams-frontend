import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-view-class',
  templateUrl: './instructor-view-class.component.html',
  styleUrl: './instructor-view-class.component.css'
})
export class InstructorViewClassComponent {

  app = new AppComponent();
  time = this.app.currTime;
  date = this.app.currDate;
  day = this.app.currDay;

  navAtten : boolean = true;
  navClass : boolean = false;
  clickedAtten : boolean = true;
  clickedClass : boolean = false;

  constructor() { 
    setInterval(() => {
      this.time = this.app.currTime;
      this.date = this.app.currDate;
      this.day = this.app.currDay;
    }, 1);
  }

  attendance = [
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    },
    {
      firstName : "John",
      lastName : "Doe",
      date: '2024-05-29',
      timeSched: '7:00 AM',
      timeIn: '7:05 AM',
      status : "Present",
    }
  ]

  class = [
    {
      fname: 'Firstname Secondname',
      lname: 'Lastname',
      email: 'user@gordoncollege.edu.ph'
    },
    {
      fname: 'Firstname Secondname',
      lname: 'Lastname',
      email: 'user@gordoncollege.edu.ph'
    },
    {
      fname: 'Firstname Secondname',
      lname: 'Lastname',
      email: 'user@gordoncollege.edu.ph'
    },
    {
      fname: 'Firstname Secondname',
      lname: 'Lastname',
      email: 'user@gordoncollege.edu.ph'
    },
    {
      fname: 'Firstname Secondname',
      lname: 'Lastname',
      email: 'user@gordoncollege.edu.ph'
    }
  ]

  isActive() {
    this.navAtten = !this.navAtten;
    this.navClass = !this.navClass;
  }

  isClicked() {
    this.clickedAtten = !this.clickedAtten;
    this.clickedClass = !this.clickedClass;
  }
}
