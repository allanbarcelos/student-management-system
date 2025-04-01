namespace API.Controllers {
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;

    [ApiController]
    [Route("api/[controller]")]
    public class HomeController: ControllerBase
    {
        [HttpGet]
        public IActionResult ApiIsWroking()
        {
            return Ok(new { Status = "Success", Message = "API is working"});
        }

        [HttpGet("protected")]
        [Authorize(Policy = "RequireUserRole")]
        public IActionResult ProtectedEndpoint()
        {
            return Ok(new { Status = "Success", Message = "If you are logged, you can see me"});
        }
        [HttpGet("total-students")]
        public IActionResult GetTotalStudents()
        {
            return Ok(100); 
        }

        [HttpGet("total-courses")]
        public IActionResult GetTotalCourses()
        {
            return Ok(20);
        }

        [HttpGet("unregistered-courses")]
        public IActionResult GetUnregisteredCourses()
        {
            return Ok(5);
        }

        [HttpGet("students-without-courses")]
        public IActionResult GetStudentsWithoutCourses()
        {
            return Ok(12);
        }
        [HttpGet("test")]
public IActionResult Test() => Ok("Hello from backend!");


    }
}