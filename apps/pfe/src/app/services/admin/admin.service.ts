import { Injectable } from '@angular/core';
import { Professor } from '../../models/Professor';
import { Student } from '../../models/Student';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  students:Student[]=[];
  professors:Professor[]=[];

  constructor() { }

  addStudent(student:Student){
    this.students.push(student);
    console.log(this.students);
  }


  getStudents(){
    return(this.students);
  }

  addProfessor(professor:Professor){
    this.professors.push(professor);
    console.log(this.professors);
  }


  getProfessors(){
    return(this.professors);
  }


  addUniversityYear(universityYearAdded: string) {
    console.log(universityYearAdded);
  }


}
