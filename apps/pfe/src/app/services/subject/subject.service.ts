import { Injectable } from '@angular/core';
import { Subject } from '../../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects:Subject[]=[];
  acceptedSubjects:Subject[]=[];
  pendingSubjects:Subject[]=[];


  getAcceptedSubjects() {
    return(this.acceptedSubjects);
  }

  addAcceptedSubject(subject:Subject){

    console.log(subject);
    this.acceptedSubjects.push(subject);
    this.pendingSubjects.splice(this.pendingSubjects.indexOf(subject),1);
    console.log(this.acceptedSubjects);
  }
  
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

  


  getAllSubjects(){
    return(this.subjects);
  }

  getPendingSubjects(){
    return(this.pendingSubjects);
  }

  addSubject(subject: Subject){
    console.log("subject added");
    console.log(subject);
    this.pendingSubjects.push(subject);
    console.log("pending subjects");
    console.log(this.pendingSubjects);
    this.subjects.push(subject);
  }


  constructor() { }
}
