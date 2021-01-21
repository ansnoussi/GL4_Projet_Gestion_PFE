import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-item-encadrement',
  templateUrl: './item-encadrement.component.html',
  styleUrls: ['./item-encadrement.component.css']
})
export class ItemEncadrementComponent implements OnInit {

  @Input() encadrement:any;
  constructor() { }

  ngOnInit(): void {
  }

}
