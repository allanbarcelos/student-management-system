using System.ComponentModel.DataAnnotations;
namespace API.Models{
public class Course
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public int Credits { get; set; }
    }
}
