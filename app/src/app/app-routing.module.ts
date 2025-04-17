import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CourseListingComponent } from './course-listing/course-listing.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
<<<<<<< HEAD
      { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
      { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
=======
      { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
      { path: 'course-listing', component: CourseListingComponent } //, Course listing page
      // { path: 'course-details/:id', component: CourseDetailsComponent }, // In stand by
      // { path: 'edit-course/:id', component: EditCourseComponent }, // In stand by
      // { path: 'delete-course/:id', component: DeleteCourseComponent }, // In stand by
      // { path: 'register-course', component: RegisterCourseComponent }, // In stand by
>>>>>>> upstream/main
    ],
    // canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
