import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  showFiller = false;

  ngOnInit(): void {
  }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }

}