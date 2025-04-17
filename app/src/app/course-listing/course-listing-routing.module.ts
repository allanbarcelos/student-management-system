import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListingComponent } from './course-listing.component';

const routes: Routes = [{ path: '', component: CourseListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListingRoutingModule { }
