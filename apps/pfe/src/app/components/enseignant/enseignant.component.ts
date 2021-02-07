import { Component, OnInit } from '@angular/core';
import { PFE } from '../../models/PFE';
import { Subject } from '../../models/Subject';
import { EnseignantService } from '../../services/enseigant/enseignant.service';
import { PfeService } from '../../services/pfe/pfe.service';
import { SubjectService } from '../../services/subject/subject.service';

@Component({
  selector: 'gl4-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {


  listPfe:PFE[]=[];
  supervisionList:Subject[]=[];



  constructor(private pfeService:PfeService, private enseignantService:EnseignantService) {
    this.listPfe=this.pfeService.getPFEs();
    this.supervisionList=this.enseignantService.getSupervisionList();
   }

  ngOnInit(): void {
  }

}
