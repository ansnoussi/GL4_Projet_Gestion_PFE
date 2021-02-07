import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject/subject.service';
import { PFE } from '../../../models/PFE';
import { PfeService } from '../../../services/pfe/pfe.service';

@Component({
  selector: 'gl4-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css']
})
export class ListPfeComponent implements OnInit {


  listPfe:PFE[] = [];
  filtredPfes:PFE[] = [];

  constructor(private pfeService:PfeService) {
    this.listPfe = this.pfeService.getPFEs();
    this.listPfe.forEach(pfe => {
      this.filtredPfes.push(pfe);
    })
  }

  ngOnInit(): void {
  }

  onSearch(query){
    this.filtredPfes = [];
    this.listPfe.forEach(pfe => {
      if(pfe.subject.title.toLowerCase().includes(query) ||
        pfe.subject.objective.toLowerCase().includes(query) ||
        pfe.subject.student.firstname.toLowerCase().includes(query) ||
        pfe.subject.student.lastname.toLowerCase().includes(query) ||
        pfe.subject.enterprise.name.toLowerCase().includes(query))
        this.filtredPfes.push(pfe);
    })
  }

  onUniversityYearChange(universityYear){
    //this.filtredPfes = [];
    //this.listPfe.forEach(pfe => {
      //if(pfe.subject.)
        //this.filtredPfes.push(pfe);
    //})
  }


}

