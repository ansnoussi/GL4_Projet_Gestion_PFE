import { Component, OnInit } from '@angular/core';
import { PFE } from '../../../models/PFE';
import { PfeService } from '../../../services/pfe/pfe.service';

@Component({
  selector: 'gl4-pfes-list',
  templateUrl: './pfes-list.component.html',
  styleUrls: ['./pfes-list.component.css']
})
export class PfesListComponent implements OnInit {

  pfeList: PFE[] = [];

  constructor(private pfeService:PfeService) {
    this.pfeList=this.pfeService.getPFEs();
   }

  ngOnInit(): void {
  }

}
