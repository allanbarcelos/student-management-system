import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { RegisterComponent } from './register/register.component'; // اگر standalone است

@NgModule({
  declarations: [
    StudentComponent
    // ❌ نباید RegisterComponent اینجا باشه
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule,
    RegisterComponent  // ✅ اگر standalone تعریف شده، باید اینجا باشه
  ]
})
export class StudentModule {}
