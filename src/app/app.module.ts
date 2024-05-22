import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { InstructorComponent } from './user/instructor/instructor.component';
import { InstructorDashboardComponent } from './user/instructor/dashboard/dashboard.component';
import { ManageClassComponent } from './user/instructor/manage-class/manage-class.component';
import { ViewClassComponent } from './user/instructor/view-class/view-class.component';
import { SidenavComponent } from './user/instructor/sidenav/sidenav.component';
import { StudentComponent } from './user/student/student.component';
import { StudentDashboardComponent } from './user/student/dashboard/dashboard.component';
import { AdminSidenavComponent } from './user/admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './user/admin/admin-dashboard/admin-dashboard.component';
import { AdminInstructorsComponent } from './user/admin/admin-instructors/admin-instructors.component';
import { AdminStudentsComponent } from './user/admin/admin-students/admin-students.component';
import { AdminAddUsersComponent } from './user/admin/admin-add-users/admin-add-users.component';



@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    InstructorDashboardComponent,
    ManageClassComponent,
    ViewClassComponent,
    StudentComponent,
    NavComponent,
    SidenavComponent,
    StudentDashboardComponent,
    AdminSidenavComponent,
    AdminDashboardComponent,
    AdminInstructorsComponent,
    AdminStudentsComponent,
    AdminAddUsersComponent,
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
