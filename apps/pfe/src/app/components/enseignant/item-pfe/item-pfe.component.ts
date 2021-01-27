import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../../../models/Subject';

@Component({
  selector: 'gl4-item-pfe',
  templateUrl: './item-pfe.component.html',
  styleUrls: ['./item-pfe.component.css']
})
export class ItemPfeComponent implements OnInit {

  @Input() pfe: Subject;
  constructor() { }

  ngOnInit(): void {
  }

}
