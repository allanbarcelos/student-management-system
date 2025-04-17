<<<<<<< HEAD
/* Name: Youadeu Noumbibou Ingride Neslie
Github Account: Ingrideyouadeu
Date: 10-04-2025
*/

namespace StudentManagementSystem.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        
    }
}
=======
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
>>>>>>> upstream/main
