import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'apps/pfe/src/app/models/Subject';
import { SubjectService } from 'apps/pfe/src/app/services/subject/subject.service';

@Component({
  selector: 'gl4-item-pending-subject',
  templateUrl: './item-pending-subject.component.html',
  styleUrls: ['./item-pending-subject.component.css']
})
export class ItemPendingSubjectComponent implements OnInit {

  @Input() subject:Subject=new Subject();

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  }

  acceptSubject(){
    this.subjectService.acceptSubject(this.subject);
  }

  refuseSubject(){
    this.subjectService.refuseSubject(this.subject);
  }

}
