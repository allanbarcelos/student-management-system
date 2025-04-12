import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  error: string | null = null;
  maxDate: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Set max date to 18 years ago
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    this.maxDate = today.toISOString().split('T')[0];

    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        dateOfBirth: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isLoading = true;
    this.error = null;

    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
    } = this.registerForm.value;

    this.authService
      .register({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        dateOfBirth,
        gender,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/auth/login'], {
            queryParams: { registered: 'true' },
          });
        },
        error: (error) => {
          this.isLoading = false;
          this.error =
            error.error?.message || 'Registration failed. Please try again.';
        },
      });
  }

  getPasswordErrorMessage(): string {
    const control = this.registerForm.get('password');
    if (control?.errors) {
      if (control.errors['required']) return 'Password is required';
      if (control.errors['minlength'])
        return 'Password must be at least 8 characters';
      if (control.errors['pattern']) {
        return 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character';
      }
    }
    return '';
  }

  private passwordMatchValidator(
    group: FormGroup
  ): { [key: string]: any } | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }
}
