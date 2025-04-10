using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public StudentsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Students/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Student>> GetStudent(int id)
    {
        //var student = await _context.Students.FindAsync(id); // Student table is not yet in the database
        
        var student = new Student(
            id,
            "Mock Student",
            "mock@student.com",
            "2000, 1, 1",
            "2025, 2, 2"
        );

        if (student == null)
        {
            return NotFound();
        }
        return student;
    }

}