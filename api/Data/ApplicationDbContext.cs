namespace API.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using API.Models;
    public class ApplicationDbContext : IdentityDbContext
    {

        public DbSet<Course> Courses { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); 

            
            modelBuilder.Entity<Course>().HasData(
                new Course { CourseId = 1, CourseTitle = "Advanced ASP.NET Core", TotalHours = 40 },
                new Course { CourseId = 2, CourseTitle = "Basic Entity Framework Core", TotalHours = 30 },
                new Course { CourseId = 3, CourseTitle = "Web Development with C#", TotalHours = 45 }
            );
        }
    }
}