import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Student';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'gl4-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  specialities: any = ['Génie logiciel', 'Informatique Industrielle et Automatique','Instrumentation et Maintenance Industrielle','Réseaux Informatiques et Télécommunications','Chimie Industrielle','Biologie Industrielle'];
  studyLevels: any = ['3ème licence appliqué', '5ème'];

  student:Student = new Student();

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  addStudent(){
    this.adminService.addStudent(this.student);
  }


}
