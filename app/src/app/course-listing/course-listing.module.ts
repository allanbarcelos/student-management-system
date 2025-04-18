import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListingRoutingModule } from './course-listing-routing.module';
// import { CourseListingComponent } from './course-listing.component';


@NgModule({
  declarations: [
    // CourseListingComponent
  ],
  imports: [
    CommonModule,
    CourseListingRoutingModule
  ]
})
export class CourseListingModule { }
