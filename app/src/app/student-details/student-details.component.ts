import { Component, Input } from '@angular/core';
//import { User } from '../core/models/user.model';

// Temporary User model for testing
interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
    // Mock student object for testing
    student: User = {
      id: 1,
      name: 'Luis Cantor',
      email: 'Luis@cantor.co'
    };
  //@Input() student!: User;
}
