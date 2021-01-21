import { Injectable } from '@angular/core';
import { Subject } from '../../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects:Subject[]=[]


  getAllSubjects(){
    return(this.subjects);
  }

  addSubject(subject:Subject){
    this.subjects.push(subject);
  }


  constructor() { }
}
