import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

// General Component
import { NavComponent } from './nav/nav.component';

// User Components:

// Instructor
import { InstructorMainComponent } from './user/instructor/instructor-main/instructor-main.component';
import { InstructorSidenavComponent } from './user/instructor/instructor-sidenav/instructor-sidenav.component';
import { InstructorDashboardComponent } from './user/instructor/instructor-dashboard/instructor-dashboard.component';
import { InstructorManageClassComponent } from './user/instructor/instructor-manage-class/instructor-manage-class.component';
import { InstructorViewClassComponent } from './user/instructor/instructor-view-class/instructor-view-class.component';

// Student
import { StudentMainComponent } from './user/student/student-main/student-main.component';
import { StudentDashboardComponent } from './user/student/student-dashboard/student-dashboard.component';

// Admin
import { AdminMainComponent } from './user/admin/admin-main/admin-main.component';
import { AdminSidenavComponent } from './user/admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './user/admin/admin-dashboard/admin-dashboard.component';
import { AdminInstructorsComponent } from './user/admin/admin-instructors/admin-instructors.component';
import { AdminStudentsComponent } from './user/admin/admin-students/admin-students.component';
import { AdminAddUsersComponent } from './user/admin/admin-add-users/admin-add-users.component';
import { AdminWriteComponent } from './user/admin/admin-write/admin-write.component';
import { AdminRegisterComponent } from './user/admin/admin-register/admin-register.component';

@NgModule({
  declarations: [
    AppComponent,

    NavComponent,

    InstructorMainComponent,
    InstructorSidenavComponent,
    InstructorDashboardComponent,
    InstructorManageClassComponent,
    InstructorViewClassComponent,

    StudentMainComponent,
    StudentDashboardComponent,
    
    AdminMainComponent,
    AdminSidenavComponent,
    AdminDashboardComponent,
    AdminInstructorsComponent,
    AdminStudentsComponent,
    AdminAddUsersComponent,
    AdminWriteComponent,
    AdminRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgFor,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
