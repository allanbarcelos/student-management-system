/* Name: Youadeu Noumbibou Ingride Neslie
Github Account: Ingrideyouadeu
Date: 10-04-2025
*/

namespace StudentManagementSystem.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        
    }
}
