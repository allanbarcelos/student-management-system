export class Course {
    id: number;
    name: string;
    description: string;
    // startDate: DateTime;
    // endDate: DateTime;    
    startDate: string;
    endDate: string;
    instructor: string;
  
    constructor(
      id: number,
      name: string,
      description: string,
      // startDate: DateTime,
      // endDate: DateTime,
      startDate: string,
      endDate: string,
      instructor: string
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
      this.instructor = instructor;
    }
  }