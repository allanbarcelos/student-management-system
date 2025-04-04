namespace API.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using StudentManagementSystem.Models;

    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            

        }

        public DbSet<Student> Students { get; set; }

        // Added for Issue #17 (for the relationship)
        public DbSet<StudentCourse> StudentCourses { get; set; }


        // Course.cs Did not exist when this was added.
        // This is for Issue #17
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<StudentCourse>()
                .HasKey(sc => new { sc.StudentId, sc.CourseId }); // sets composite PK

            // Defines relationship Course <--> Student
            modelBuilder.Entity<StudentCourse>()
                .HasOne(sc => sc.Student)
                .WithMany(s => s.StudentCourses)
                .HasForeignKey(sc => sc.StudentId);

            // Uncomment below when Course.cs is created.
            // modelBuilder.Entity<StudentCourse>()
            //     .HasOne(sc => sc.Course)
            //     .WithMany(c => c.StudentCourses)
            //     .HasForeignKey(sc => sc.CourseId);
        }


    }
}