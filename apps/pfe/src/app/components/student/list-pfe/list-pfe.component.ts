import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/Subject';
import { SubjectService } from '../../../services/subject/subject.service';

@Component({
  selector: 'gl4-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css']
})
export class ListPfeComponent implements OnInit {


  listPfe:Subject[]=[];
  
  constructor(private subjectService:SubjectService) { 
    this.listPfe=this.subjectService.getAllSubjects();
  }

  ngOnInit(): void {
  }

}
