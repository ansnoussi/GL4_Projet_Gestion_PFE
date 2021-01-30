import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from '../../../models/Subject';
import { SubjectService } from '../../../services/subject/subject.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {


  @ViewChild('addSubjectForm', {static: false}) addSubjectForm: NgForm;

  subject: Subject = new Subject();
  startDate:Date=new Date();
  endDate:Date= new Date();
  tool:String;
  tools:String[]=[];



  constructor(private subjectService: SubjectService) { }

  ngOnInit(){
  }

  addTool(){
    this.tools.push(this.tool);
  }


  addSubject(){
    console.log(typeof(this.subject.startDate));
    this.subject.startDate = this.startDate.toLocaleString().split(' ')[0];
    this.subject.endDate = this.endDate.toLocaleString().split(' ')[0];
    this.subject.tools=this.tools;
    this.subjectService.addSubject(this.subject);
    this.addSubjectForm.resetForm();
  }



}
