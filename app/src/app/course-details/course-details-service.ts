import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Course {
    id: number;
    name: string;
    description: string;
    startDate: string; // ISO format expected
    endDate: string;
    instructor: string;
  }

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5167/api/Courses'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
}