using Microsoft.AspNetCore.Mvc;
using StudentManagementSystem.Models;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace StudentManagementSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST
        [HttpPost]
        public async Task<ActionResult<Student>> CreateStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStudentById), new { id = student.Id }, student);
        }

        // GET
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentById(int id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null){

                return NotFound();
            }

            return student;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetAllStudents()
        {
            return await _context.Students.ToListAsync();
        }

        // PUT
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, [FromBody] Student updatedStudent)
        {
            // Validation
            if(updatedStudent == null | id != updatedStudent.Id){
                return BadRequest( new { message = "Invalid request. Student data is missing or ID mismatch." });
            }

            // Check if student exists
            var student = await _context.Students.FindAsync(id);
            if (student == null){

                return NotFound(new { message = $"Student with ID {id} was not found."});

            }

            // Try updating
            try{
                // update if found
                student.Name = updatedStudent.Name;
                student.Email = updatedStudent.Email;
                student.DateOfBirth = updatedStudent.DateOfBirth;
                student.EnrollmentDate = updatedStudent.EnrollmentDate;

                await _context.SaveChangesAsync();
                return Ok( new { message = "Updated successfully.", student });
            }
            catch(Exception ex) {
                return StatusCode(500, new { message = "Hmm. Something happened while updating the student.", error = ex.Message});
            }
            
        }
        
    }
}
