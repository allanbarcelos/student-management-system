import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' }, // ✅ پیش‌فرض → students
      { path: 'students', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: 'error' } // برای مسیرهای اشتباه
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
