import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/Subject';
import { SubjectService } from '../../../services/subject/subject.service';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {

  subject: Subject = new Subject();
  startDate:Date=new Date();
  endDate:Date= new Date();



  constructor(private subjectService: SubjectService) { }

  ngOnInit(){
  }



  addSubject(){
    console.log(typeof(this.subject.startDate));
    this.subject.startDate = this.startDate.toLocaleString().split(' ')[0];
    this.subject.endDate = this.endDate.toLocaleString().split(' ')[0];
    this.subjectService.addSubject(this.subject);
  }



}
