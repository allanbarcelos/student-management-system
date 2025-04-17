import { Component } from '@angular/core';
import { CourseListingService, Course } from './course-listing.service';

@Component({
  selector: 'app-course-listing',
  standalone: false,
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss']
})
export class CourseListingComponent {
  courses = [
    {
      id: 1,
      name: 'Math 101',
      description: 'Basic Mathematics',
      // startDate: new Date(2025, 0, 10), // January 10, 2025
      // endDate: new Date(2025, 4, 20), // May 20, 2025
      startDate: '2025-01-10', // String format
      endDate: '2025-05-20',   // String format
      instructor: 'John Doe'
    },
    {
      id: 2,
      name: 'Physics 201',
      description: 'Intermediate Physics',
      // startDate: new Date(2025, 1, 15), // February 15, 2025
      // endDate: new Date(2025, 5, 25), // June 25, 2025
      startDate: '2025-02-15', // String format
      endDate: '2025-06-25', // String format
      instructor: 'Jane Smith'
    },
    {
      id: 3,
      name: 'Chemistry 301',
      description: 'Advanced Chemistry',
      // startDate: new Date(2025, 2, 1), // March 1, 2025
      // endDate: new Date(2025, 6, 30), // July 30, 2025
      startDate: '2025-03-01', // String format
      endDate: '2025-07-30',   // String format
      instructor: 'Albert Brown'
    }
  ];
  
  // Uncomment the following lines to use the CourseListingService:
  // export class CourseListingComponent implements OnInit {
  //   courses: Course[] = [];
  
  //   constructor(private courseService: CourseListingService) {}
  
  //   ngOnInit(): void {
  //     this.loadCourses();
  //   }
  
  //   loadCourses(): void {
  //     this.courseService.getCourses().subscribe((data) => {
  //       this.courses = data;
  //     });
  //   }
}
