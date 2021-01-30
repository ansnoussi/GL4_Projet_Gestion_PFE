import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/Subject';
import { EnseignantService } from '../../services/enseigant/enseignant.service';
import { SubjectService } from '../../services/subject/subject.service';

@Component({
  selector: 'gl4-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {


  listPfe:Subject[]=[];
  supervisionList:Subject[]=[];



  constructor(private subjectService:SubjectService, private enseignantService:EnseignantService) {
    this.listPfe=this.subjectService.getAllSubjects();
    this.supervisionList=this.enseignantService.getSupervisionList();
   }

  ngOnInit(): void {
  }

}
