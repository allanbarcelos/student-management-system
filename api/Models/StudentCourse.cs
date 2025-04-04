namespace StudentManagementSystem.Models
{
    public class StudentCourse
    {
        public int StudentId { get; set; }
        public Student Student { get; set; }

        public int CourseId { get; set; }

        // Course Model (Course.cs) did not exist when this file was created
        // Therefore, the following line is commented.
        // Uncomment when Course.cs is created.
        // public Course Course { get; set; }
    }
}
