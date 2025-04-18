import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { CourseListingComponent } from '../course-listing/course-listing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course-registration', component: CourseRegistrationComponent },
  { path: 'course-listing', component: CourseListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
