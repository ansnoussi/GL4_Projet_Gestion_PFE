import { Component, Input, OnInit } from '@angular/core';
import { PFE } from '../../../models/PFE';

@Component({
  selector: 'gl4-item-pfe',
  templateUrl: './item-pfe.component.html',
  styleUrls: ['./item-pfe.component.css']
})
export class ItemPfeComponent implements OnInit {

  @Input() pfe: PFE;
  constructor() { }

  ngOnInit(): void {
  }

}
