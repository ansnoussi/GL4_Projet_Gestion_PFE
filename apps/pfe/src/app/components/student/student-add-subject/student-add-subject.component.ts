import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from '../../../models/Subject';
import { SubjectService } from '../../../services/subject/subject.service';
import { NgForm, NgModel } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {


  @ViewChild('addSubjectForm', {static: false}) addSubjectForm: NgForm;
  @ViewChild('toolChamp', {static: false}) toolChamp: NgModel;

  subject: Subject = new Subject();
  startDate:Date=new Date();
  endDate:Date= new Date();
  tool:String;
  tools:String[]=[];



  constructor(private subjectService: SubjectService, private studentService:StudentService) { }

  ngOnInit(){
  }

  addTool(){
    this.tools.push(this.tool);
    this.tool = '';
  }


  addSubject(){
    this.subject.startDate = this.startDate.toLocaleString().split(' ')[0];
    this.subject.endDate = this.endDate.toLocaleString().split(' ')[0];
    this.subject.tools=this.tools;
    this.subjectService.addSubject(this.cloneObject(this.subject));
    this.studentService.setSubmittedSubject(true);
    this.addSubjectForm.resetForm();
  }

  cloneObject(obj: any) {
    return Object.assign({}, obj);
  }



}
