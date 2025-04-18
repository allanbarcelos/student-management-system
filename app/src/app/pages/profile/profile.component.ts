import { Component, NgModule } from '@angular/core';
import { ApiService } from '../../core/services/api.service'; //To get the data and update user data
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  user: any = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {

    this.user = {
      name: "John Doe",
      email: "john.doe@example.com",
      password: ""
    };

    // this.apiService.getUserProfile().subscribe(
    //   (userData) => {
    //     this.user = userData;
    //   },
    //   (error) => {
    //     console.error('Error fetching user data', error);
    //   }
    // );
  }

  onSubmit(): void {
    // console.log('Form submitted: ', this.user)
  //   this.apiService.updateUserProfile(this.user).subscribe(
  //     (updatedUser) => {
  //       this.user = updatedUser;
  //       alert('Profile updated successfully!');
  //     },
  //     (error) => {
  //       console.error('Error updating profile', error);
  //       alert('An error occured while updating your profile.');
  //     }
  //   );
  }
}
