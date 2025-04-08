import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // ⬅️ این خط خیلی مهمه
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  student = {
    fullName: '',
    email: '',
    phone: ''
  };

  constructor() {}

  onSubmit() {
    console.log('Student registered:', this.student);
    alert(`Student Registered!\n\nName: ${this.student.fullName}\nEmail: ${this.student.email}\nPhone: ${this.student.phone}`);
  }
}
