namespace API.Models{
public class Course
{
    public int CourseId{get;set;}
    public string CourseTitle {get;set;}

    public int TotalHours {get;set;}
    public Course()
    {

    }



    public Course(int courseId, string courseTitle, int totalHours)
    {
        CourseId = courseId;
        CourseTitle = courseTitle;
        TotalHours = totalHours;
    }

    public void DisplayCourseDetails()
{
    Console.WriteLine($"Course ID: {CourseId}");
    Console.WriteLine($"Course Title: {CourseTitle}");
    Console.WriteLine($"Total Hours: {TotalHours}");
}
}}
