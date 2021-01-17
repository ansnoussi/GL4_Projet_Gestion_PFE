import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-item-pfe',
  templateUrl: './item-pfe.component.html',
  styleUrls: ['./item-pfe.component.css']
})
export class ItemPfeComponent implements OnInit {

  @Input() pfe:any;
  constructor() { }

  ngOnInit(): void {
  }

}
