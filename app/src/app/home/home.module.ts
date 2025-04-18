import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRegistrationComponent } from './course-registration/course-registration.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent, 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CourseRegistrationComponent,
    FormsModule
    
  ]
})
export class HomeModule { }
