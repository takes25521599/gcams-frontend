import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class StudentDashboardComponent {
  myClasses = [
    {
      name: 'Class 1',
      classCode: 'Code 1',
      time: '7:00 AM - 10:00 AM',
      roomNo: '510'
    },
    {
      name: 'Class 2',
      classCode: 'Code 2',
      time: '7:00 AM - 10:00 AM',
      roomNo: '510'
    },
    {
      name: 'Class 3',
      classCode: 'Code 3',
      time: '7:00 AM - 10:00 AM',
      roomNo: '510'
    },
    {
      name: 'Class 4',
      classCode: 'Code 4',
      time: '7:00 AM - 10:00 AM',
      roomNo: '510'
    },
    {
      name: 'Class 5',
      classCode: 'Code 5',
      time: '7:00 AM - 10:00 AM',
      roomNo: '510'
    },
  ]
}
