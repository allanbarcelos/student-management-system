import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  studentCount = 0;
  courseCount = 0;
  unregisteredCourseCount = 0;
  studentsWithoutCourses = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    const baseUrl = 'http://localhost:5167/api/Home'; 
  
    this.http.get<number>(`${baseUrl}/total-students`).subscribe(data => {
      this.studentCount = data;
    });

    this.http.get<number>(`${baseUrl}/total-courses`).subscribe(data => {
      this.courseCount = data;
    });

    this.http.get<number>(`${baseUrl}/unregistered-courses`).subscribe(data => {
      this.unregisteredCourseCount = data;
    });

    this.http.get<number>(`${baseUrl}/students-without-courses`).subscribe(data => {
      this.studentsWithoutCourses = data;
    });
  }}
  