import { Injectable } from '@angular/core';
import { Subject } from '../../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

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
