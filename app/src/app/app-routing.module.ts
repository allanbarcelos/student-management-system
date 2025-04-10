import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { StudentEnrollmentComponent } from './student-enrollment/student-enrollment.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule), },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
  { path: 'enroll-student', component: StudentEnrollmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
