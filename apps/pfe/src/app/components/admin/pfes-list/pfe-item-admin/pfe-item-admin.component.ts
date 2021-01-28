import { Component, Input, OnInit } from '@angular/core';
import { PFE } from 'apps/pfe/src/app/models/PFE';

@Component({
  selector: 'gl4-pfe-item-admin',
  templateUrl: './pfe-item-admin.component.html',
  styleUrls: ['./pfe-item-admin.component.css']
})
export class PfeItemAdminComponent implements OnInit {
  @Input() pfe:PFE;

  constructor() { }

  ngOnInit(): void {
  }

}
