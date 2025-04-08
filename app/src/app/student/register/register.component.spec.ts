import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true, // ⬅️ این مشخص می‌کنه که کامپوننت مستقل هست
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, FormsModule] // ✅ این خیلی مهمه
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
