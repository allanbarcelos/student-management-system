using System.ComponentModel.DataAnnotations;

namespace api.DTOs
{
    public class CreateCourseDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        [StringLength(10)]
        public string Code { get; set; }

        [Required]
        [Range(1, 6)]
        public int Credits { get; set; }

        [Required]
        [StringLength(50)]
        public string Department { get; set; }

        [Required]
        [Range(1, 200)]
        public int MaxStudents { get; set; }
    }

    public class CourseResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }
        public int Credits { get; set; }
        public string Department { get; set; }
        public int MaxStudents { get; set; }
        public bool IsActive { get; set; }
    }
} 