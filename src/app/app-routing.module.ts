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

      {path: 'admin', component: AdminMainComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
