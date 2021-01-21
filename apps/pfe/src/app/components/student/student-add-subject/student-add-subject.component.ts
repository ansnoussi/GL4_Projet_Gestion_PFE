import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/Subject';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {

  subject: Subject = new Subject();
  constructor() { }

  ngOnInit(){
  }



  addSubject(){
  }



}
