import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../../services/subject/subject.service';

@Component({
  selector: 'gl4-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  constructor(private subjectService:SubjectService) { }

  reason = '';

  ngOnInit(): void {
  }

  onSubmit(){
    this.subjectService.refuseSubject(this.reason)
  }

}
