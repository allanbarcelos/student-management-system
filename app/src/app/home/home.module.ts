import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRegistrationComponent } from './course-registration/course-registration.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent, 
    CourseRegistrationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
