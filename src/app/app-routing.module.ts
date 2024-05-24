import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { InstructorMainComponent } from './user/instructor/instructor-main/instructor-main.component';
import { InstructorDashboardComponent } from './user/instructor/instructor-dashboard/instructor-dashboard.component';
import { InstructorManageClassComponent } from './user/instructor/instructor-manage-class/instructor-manage-class.component';
import { InstructorViewClassComponent } from './user/instructor/instructor-view-class/instructor-view-class.component';
import { InstructorSidenavComponent } from './user/instructor/instructor-sidenav/instructor-sidenav.component';
import { StudentMainComponent } from './user/student/student-main/student-main.component';
import { StudentDashboardComponent } from './user/student/student-dashboard/student-dashboard.component';
import { AdminMainComponent } from './user/admin/admin-main/admin-main.component';
import { AdminSidenavComponent } from './user/admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './user/admin/admin-dashboard/admin-dashboard.component';
import { AdminInstructorsComponent } from './user/admin/admin-instructors/admin-instructors.component';
import { AdminStudentsComponent } from './user/admin/admin-students/admin-students.component';
import { AdminAddUsersComponent } from './user/admin/admin-add-users/admin-add-users.component';
import { AdminWriteComponent } from './user/admin/admin-write/admin-write.component';
import { AdminRegisterComponent } from './user/admin/admin-register/admin-register.component';

export const routes: Routes = [
  {path: 'menu', component: NavComponent,
    children: [
      {path: 'instructor', component: InstructorMainComponent,
        children: [
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: InstructorDashboardComponent},
          {path: 'manage-class', component: InstructorManageClassComponent},
          {path: 'manage-class/view-class', component: InstructorViewClassComponent}
        ]
      },
      {path: 'student', component: StudentMainComponent},

      {path: 'admin', component: AdminMainComponent,
        children: [
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: AdminDashboardComponent},
          {path: 'write', component: AdminWriteComponent},
          {path: 'register', component: AdminRegisterComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
