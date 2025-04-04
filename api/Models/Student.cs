using System;

public class Student 
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime EnrollmentDate { get; set; }

    public Student(int id, string name, string email, DateTime dob, DateTime enrollementDate) 
    {
        Id = id;
        Name = name;
        Email = email;
        DateOfBirth = dob;
        EnrollmentDate = enrollementDate;
    }

    public void DisplayStudentDetails()
    {
        Console.WriteLine($"Student ID: {Id}");
        Console.WriteLine($"Student Name: {Name}");
        Console.WriteLine($"Student Email: {Email}");
        Console.WriteLine($"Student Date of Birth: {DateOfBirth}");
        Console.WriteLine($"Student Enrollment Date: {EnrollmentDate}");
    }
}