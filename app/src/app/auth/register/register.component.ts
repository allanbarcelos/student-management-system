import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router'; // ✅ این لازمه برای routerLink
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule // ✅ اینو حتما اضافه کن
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private authSrv: AuthService, private router: Router){
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    if(this.form.get('password')?.value !== this.form.get('confirmPassword')?.value){
      return;
    }

    this.loading = true;

    const user = {
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };

    this.authSrv.register(user)
      .pipe(first())
      .subscribe({
        next: (data) => {
          if(data) this.router.navigate(['/auth/login']);
        },
        error: () => {
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
