import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from './course.service';

interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;
  startDate: Date;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseForm: FormGroup;
  courses: Course[] = [];
  isEditing = false;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService
  ) {
    this.courseForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to load courses. Please try again later.';
        this.isLoading = false;
        console.error('Error loading courses:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return;
    }

    this.isLoading = true;
    const courseData = this.courseForm.value;

    if (this.isEditing) {
      this.courseService.updateCourse(courseData).subscribe({
        next: () => {
          this.loadCourses();
          this.resetForm();
        },
        error: (error) => {
          this.error = 'Failed to update course. Please try again.';
          this.isLoading = false;
          console.error('Error updating course:', error);
        }
      });
    } else {
      this.courseService.createCourse(courseData).subscribe({
        next: () => {
          this.loadCourses();
          this.resetForm();
        },
        error: (error) => {
          this.error = 'Failed to create course. Please try again.';
          this.isLoading = false;
          console.error('Error creating course:', error);
        }
      });
    }
  }

  editCourse(course: Course): void {
    this.isEditing = true;
    this.courseForm.patchValue({
      id: course.id,
      name: course.name,
      description: course.description,
      duration: course.duration,
      startDate: new Date(course.startDate).toISOString().split('T')[0]
    });
  }

  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.isLoading = true;
      this.courseService.deleteCourse(id).subscribe({
        next: () => {
          this.loadCourses();
        },
        error: (error) => {
          this.error = 'Failed to delete course. Please try again.';
          this.isLoading = false;
          console.error('Error deleting course:', error);
        }
      });
    }
  }

  resetForm(): void {
    this.isEditing = false;
    this.courseForm.reset();
    this.error = null;
    this.isLoading = false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.courseForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
      }
      if (control.errors['minlength']) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
      if (control.errors['min']) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be greater than 0`;
      }
    }
    return '';
  }
} 