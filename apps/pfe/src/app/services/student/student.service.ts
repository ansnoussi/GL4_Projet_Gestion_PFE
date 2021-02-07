import { Injectable } from '@angular/core';
import { PFE } from '../../models/PFE';
import { PfeService } from '../pfe/pfe.service';
import { SubjectService } from '../subject/subject.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  submittedSubject:Boolean=false;
  acceptedSubject:Boolean=false;
  pfe:PFE=new PFE();


  getPFE(){
    return(this.pfe);
  }

  getSubmittedSubject(){
    return(this.submittedSubject);
  }

  getAcceptedSubject(){
    return(this.acceptedSubject);
  }


  setSubmittedSubject(submittedSubject: boolean) {
    this.submittedSubject=submittedSubject;
  }

  constructor(private pfeService:PfeService, private subjectService:SubjectService) {
    this.pfe=this.pfeService.getStudentPFE();
    if(this.subjectService.isAccepted(this.pfe.subject)==true){
      this.acceptedSubject=true;
    }
   }


}
