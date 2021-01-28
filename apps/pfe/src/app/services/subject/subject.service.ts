import { Injectable } from '@angular/core';
import { Subject } from '../../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  refuseSubject(subject: Subject) {
    this.pendingSubjects.splice(this.pendingSubjects.indexOf(subject),1);
    console.log(this.subjects);
    console.log(this.pendingSubjects);
  }
  acceptSubject(subject:Subject) {
    this.subjects.push(subject);
    this.pendingSubjects.splice(this.pendingSubjects.indexOf(subject),1);
    console.log(this.subjects);
    console.log(this.pendingSubjects);
  }

  subjects:Subject[]=[];
  pendingSubjects:Subject[]=[];


  getAllSubjects(){
    return(this.subjects);
  }

  getPendingSubjects(){
    return(this.pendingSubjects);
  }

  addSubject(subject: Subject){
    this.subjects.push(subject);
    this.pendingSubjects.push(subject);
  }


  constructor() { }
}
