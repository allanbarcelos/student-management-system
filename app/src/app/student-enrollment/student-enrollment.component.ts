import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.scss']
})
export class StudentEnrollmentComponent implements OnInit {
  students: any[] = [];
  courses: any[] = [];
  selectedStudent: string = '';
  selectedCourse: string = '';
  message: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchCourses();
  }

  fetchStudents() {
    this.api.get('/students').subscribe({
      next: (data: any) => this.students = data,
      error: (err: any) => console.error('Error loading students', err)
    });
  }

  fetchCourses() {
    this.api.get('/courses').subscribe({
      next: (data: any) => this.courses = data,
      error: (err: any) => console.error('Error loading courses', err)
    });
  }

  onEnroll() {
    if (!this.selectedStudent || !this.selectedCourse) {
      this.message = 'Please select both a student and a course.';
      return;
    }

    const enrollment = {
      studentId: this.selectedStudent,
      courseId: this.selectedCourse
    };

    this.api.post('/enrollments', enrollment).subscribe({
      next: () => {
        this.message = '✅ Student enrolled successfully!';
        this.selectedStudent = '';
        this.selectedCourse = '';
      },
      error: (err: any) => {
        console.error(err);
        this.message = '❌ Enrollment failed. Please try again.';
      }
    });
  }
}
