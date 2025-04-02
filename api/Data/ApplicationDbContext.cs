using API.Models;

namespace API.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        
        public DbSet<Course> Courses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); 

           
            modelBuilder.Entity<Course>().HasData(
                new Course { Id = 1, Name = "Mathematics", Description = "fundamental mathematics", Credits = 3 },
                new Course { Id = 2, Name = "Programming", Description = " C# programming", Credits = 4 }
            );
        }

        
        
    
    }
}