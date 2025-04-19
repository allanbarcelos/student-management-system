using System;

namespace StudentManagementSystem.Api.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Instructor { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; } 

        public Course() { }

        public Course(int id, string name, string description, DateTime startDate, DateTime endDate, string instructor)
        {
            Id = id;
            Name = name;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            Instructor = instructor;
        }
        public void DisplayCourseDetails()
        {
            Console.WriteLine($"Course ID: {Id}");
            Console.WriteLine($"Course Name: {Name}");
            Console.WriteLine($"Course Description: {Description}");
            Console.WriteLine($"Course Start Date: {StartDate}");
            Console.WriteLine($"Course End Date: {EndDate}");
            Console.WriteLine($"Course Instructor: {Instructor}");
        }
    }
}