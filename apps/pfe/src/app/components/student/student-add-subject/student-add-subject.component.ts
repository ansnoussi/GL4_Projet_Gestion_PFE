import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {


  pfe = {
    'titre':'',
    'entreprise':'',
    'domaine':'',
    };
  constructor() { }

  ngOnInit(): void {
  }

}
