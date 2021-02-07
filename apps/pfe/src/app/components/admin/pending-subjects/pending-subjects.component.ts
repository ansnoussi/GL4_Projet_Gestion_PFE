import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/Subject';
import { SubjectService } from '../../../services/subject/subject.service';

@Component({
  selector: 'gl4-pending-subjects',
  templateUrl: './pending-subjects.component.html',
  styleUrls: ['./pending-subjects.component.css']
})
export class PendingSubjectsComponent implements OnInit {

  pendingSubjects:Subject[]=[];


  constructor(private subjectService:SubjectService) {
    this.pendingSubjects=this.subjectService.getPendingSubjects();
   }

  ngOnInit(): void {
  }

}
