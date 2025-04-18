import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course-details-service';
import { Course } from './course-details-service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  standalone: false
})
export class CourseDetailsComponent implements OnInit {
  course?: Course;
  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.courseService.getCourse(id).subscribe({
        next: (data) => this.course = data,
        error: (err) => this.errorMessage = 'Course not found.'
      });
    }
  }
}
