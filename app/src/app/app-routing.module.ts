import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CourseListingComponent } from './course-listing/course-listing.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'profile', component: ProfileComponent },
      { path: 'course-listing', component: CourseListingComponent } //, Course listing page
      // { path: 'course-details/:id', component: CourseDetailsComponent }, // In stand by
      // { path: 'edit-course/:id', component: EditCourseComponent }, // In stand by
      // { path: 'delete-course/:id', component: DeleteCourseComponent }, // In stand by
      // { path: 'register-course', component: RegisterCourseComponent }, // In stand by
    ],
    // canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule), },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
