import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model'; 
import { HttpErrorResponse } from '@angular/common/http';

  // This is a temporary object to simulate the student data
  // comment to use the real implementation

//   interface Student_test {
//   id: number;
//   name: string;
//   email: string;
//   dateOfBirth: string;
//   enrollmentDate: string;
// }
@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})

export class StudentDetailsComponent {


  // This is a temporary object to simulate the student data
  // comment to use the real implementation

  // student: Student_test = {
  //   id: 1,
  //   name: 'Luis Cantor',
  //   email: 'Luis@cantor.co',
  //   dateOfBirth: '1598-01-01',
  //   enrollmentDate: '2023-01-01'
  // };
  

  // Uncomment the following code to use the real implementation
  
  student: Student | null = null; // Holds the student data
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (isNaN(id) || id <= 0) {
    this.errorMessage = 'Invalid or missing student ID.';
    console.error('Invalid or missing student ID.');
    return;
  }

  this.fetchStudent(id); // Fetch the student data from the backend
}

  fetchStudent(id: number): void {
    this.studentService.getStudentById(id).subscribe({
      next: (data: Student) => {
        this.student = data; // Assign the fetched student data
        this.errorMessage = null;
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = 'Student not found or an error occurred.';
        console.error(err);
      }
    });
  }
  
}