import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { InstructorComponent } from './user/instructor/instructor.component';
import { InstructorDashboardComponent } from './user/instructor/dashboard/dashboard.component';
import { ManageClassComponent } from './user/instructor/manage-class/manage-class.component';
import { ViewClassComponent } from './user/instructor/view-class/view-class.component';
import { SidenavComponent } from './user/instructor/sidenav/sidenav.component';
import { StudentComponent } from './user/student/student.component';
import { StudentDashboardComponent } from './user/student/dashboard/dashboard.component';



export const routes: Routes = [
  {path: 'menu', component: NavComponent,
    children: [
      {path: 'instructor', component: InstructorComponent,
        children: [
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: InstructorDashboardComponent},
          {path: 'manage-class', component: ManageClassComponent},
          {path: 'manage-class/view-class', component: ViewClassComponent}
        ]
      },
      {path:'student', component: StudentComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
