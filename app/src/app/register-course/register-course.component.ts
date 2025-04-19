import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-course',
  standalone: false,
  templateUrl: './register-course.component.html',
  styleUrl: './register-course.component.scss',
})
export class RegisterCourseComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      instructor: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log('✅ Course Registered:', this.courseForm.value);
      alert('Course registered successfully!');
      this.courseForm.reset();
    } else {
      alert('❌ Please fill in all required fields.');
    }
  }
}
