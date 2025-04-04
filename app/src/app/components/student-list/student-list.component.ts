import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  standalone: false,
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  // Added by @sarahdadoun01 - needed to test if what i did was working. uncomment to see it return real data at http://localhost:4200/students
//   ngOnInit(): void {
//     this.studentService.getAllStudents().subscribe({
//       next: (data) => {
//         this.students = data;
//       },
//       error: (err) => {
//         console.error('Error fetching students:', err);
//       }
//     });
//   }

    // Mock data
    // Remove once above is uncommented
    ngOnInit(): void {
        this.students = [
        { id: 1, name: 'Test Student', email: 'test@example.com', dateOfBirth: '2000-01-01', enrollmentDate: '2024-09-01' }
        ];
    }
  
}
