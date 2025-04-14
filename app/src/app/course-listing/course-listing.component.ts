import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-listing',
  standalone: false,
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss']
})
export class CourseListingComponent {
  constructor() {}

  // Pagination properties
  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

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
    },
    {
      id: 4,
      name: 'Computer Science 101',
      description: 'Introduction to Programming',
      startDate: '2025-01-15',
      endDate: '2025-05-25',
      instructor: 'Sarah Johnson'
    },
    {
      id: 5,
      name: 'Biology 201',
      description: 'Cell Biology and Genetics',
      startDate: '2025-02-01',
      endDate: '2025-06-10',
      instructor: 'Michael Chen'
    },
    {
      id: 6,
      name: 'English Literature',
      description: 'Classic and Modern Literature',
      startDate: '2025-03-15',
      endDate: '2025-07-20',
      instructor: 'Emily Wilson'
    },
    {
      id: 7,
      name: 'History 301',
      description: 'World History and Civilizations',
      startDate: '2025-01-20',
      endDate: '2025-05-30',
      instructor: 'Robert Davis'
    },
    {
      id: 8,
      name: 'Economics 201',
      description: 'Micro and Macro Economics',
      startDate: '2025-02-10',
      endDate: '2025-06-15',
      instructor: 'Lisa Thompson'
    }
  ];

  // Get paginated courses
  get paginatedCourses() {
    this.totalItems = this.courses.length;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.courses.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Get total pages
  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Change page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Get page numbers for pagination
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
