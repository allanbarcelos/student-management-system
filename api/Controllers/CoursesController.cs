namespace API.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.EntityFrameworkCore;
    using API.Data;
    using API.Models;
    using System.Threading.Tasks;

    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CoursesController(ApplicationDbContext context)
        {
            _context = context;
        }

     
   

        // DELETE: api/courses/{id}
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")] // Only admin can delete courses
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            
            if (course == null)
            {
                return NotFound(new { message = $"Course with ID {id} not found" });
            }

            try
            {
                _context.Courses.Remove(course);
                await _context.SaveChangesAsync();

                return Ok(new { message = $"Course '{course.Name}' deleted successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error deleting the course", error = ex.Message });
            }
        }

        private async Task<bool> CourseExists(int id)
        {
            return await _context.Courses.AnyAsync(e => e.Id == id);
        }
    }
} 