import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
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

  ngOnInit(): void {
    
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
    }

    this.authSrv.register(user)
      .pipe(first())
      .subscribe({
        next: (data) => {
          if(data) this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      })


  }


}
