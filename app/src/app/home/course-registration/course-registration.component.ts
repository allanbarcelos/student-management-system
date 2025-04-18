import { Component } from '@angular/core';
import { CourseListingService, Course } from '../../course-listing/course-listing.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss'], 
  standalone: true, 
  imports: [FormsModule]
})
export class CourseRegistrationComponent {
  constructor(
    private courseService: CourseListingService,
  ) {}

  registerCourse(formRef: any) {
    const form = formRef.value;
  
    const courseData: Course = {
      id: 0, // or auto-gen
      name: form.courseName,
      description: form.description,
      startDate: form.startDate || '',
      endDate: form.endDate || '',
      instructor: form.instructor || '',
    };

    this.courseService.createCourse(courseData).subscribe({
      next: (res) => {
        alert('Course registered successfully!');
        formRef.resetForm();
      },
      error: (err) => {
        console.error(err);
        alert('Error registering course.');
      }
    });
  }
}