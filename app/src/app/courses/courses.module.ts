import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { CourseService } from './course.service';

const routes: Routes = [
  { path: '', component: CoursesComponent }
];

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { } 