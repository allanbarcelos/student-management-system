using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CoursesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetCourses()
        {
            var courses = _context.Courses.ToList();
            return Ok(courses);
        }
    }
}
