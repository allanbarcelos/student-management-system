using System;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Course
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        public int Credits { get; set; }

        [Required]
        public string Department { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }

        [Range(0, 500)]
        public int MaxStudents { get; set; }

        public bool IsActive { get; set; } = true;
    }
} 