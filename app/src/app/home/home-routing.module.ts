import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course-registration', component: CourseRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
