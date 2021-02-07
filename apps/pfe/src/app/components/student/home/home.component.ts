import { Component, OnInit } from '@angular/core';
import { PFE } from '../../../models/PFE';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'gl4-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submittedSubject:Boolean=false;
  acceptedSubject:Boolean=false;
  pfe:PFE=null;

  constructor(private studentService:StudentService) {
    this.submittedSubject=this.studentService.getSubmittedSubject();
    this.acceptedSubject=this.studentService.getAcceptedSubject();
    this.pfe=this.studentService.getPFE();
   }

  ngOnInit(): void {
  }

}
