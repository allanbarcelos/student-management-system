// namespace API.Controllers {
//     using Microsoft.AspNetCore.Mvc;
//     using Microsoft.AspNetCore.Authorization;

//     [ApiController]
//     [Route("")]
//     public class StudentController: ControllerBase
//     {


//         [HttpGet("/{studentId}/courses/{courseId}")]
//         [Authorize(Policy = "RequireAdminRole")]
//         public IActionResult StudentEnrollment(string studentId, string courseId)
//         {
//             var user = new Student { UserName = model.Email, Email = model.Email };
//             var result = await _studentManager.Enroll(studentId, courseId);

//             if (result.Succeeded){
//                 await _userManager.AddToRoleAsync(user, "User");
//                 return Ok(new { message = "User registred seccessfully" });
//             }

//             return BadRequest(result.Errors);
//         }

//     }
// }