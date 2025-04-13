using System;
using System.Threading.Tasks;
using api.DTOs;
using api.Models;
using api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CourseController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<CourseResponseDto>> CreateCourse(CreateCourseDto courseDto)
        {
            // Check if course code already exists
            var existingCourse = await _context.Courses
                .FirstOrDefaultAsync(c => c.Code.ToLower() == courseDto.Code.ToLower());

            if (existingCourse != null)
            {
                return BadRequest(new { message = "Course code already exists" });
            }

            var course = new Course
            {
                Name = courseDto.Name,
                Description = courseDto.Description,
                Code = courseDto.Code.ToUpper(), // Store course codes in uppercase
                Credits = courseDto.Credits,
                Department = courseDto.Department,
                MaxStudents = courseDto.MaxStudents,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };

            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetCourse), 
                new { id = course.Id },
                new CourseResponseDto
                {
                    Id = course.Id,
                    Name = course.Name,
                    Description = course.Description,
                    Code = course.Code,
                    Credits = course.Credits,
                    Department = course.Department,
                    MaxStudents = course.MaxStudents,
                    IsActive = course.IsActive
                }
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CourseResponseDto>> GetCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return new CourseResponseDto
            {
                Id = course.Id,
                Name = course.Name,
                Description = course.Description,
                Code = course.Code,
                Credits = course.Credits,
                Department = course.Department,
                MaxStudents = course.MaxStudents,
                IsActive = course.IsActive
            };
        }
    }
}