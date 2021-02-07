import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../../models/Student';
import { AdminService } from '../../../services/admin/admin.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploaderRapportPFEComponent } from '../../student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { ImportDataFromFileComponent } from '../import-data-from-file/import-data-from-file.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'gl4-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @ViewChild('addStudentForm', {static: false}) addStudentForm: NgForm;

  specialities: any = ['Génie logiciel', 'Informatique Industrielle et Automatique','Instrumentation et Maintenance Industrielle','Réseaux Informatiques et Télécommunications','Chimie Industrielle','Biologie Industrielle'];
  studyLevels: any = ['3ème licence appliqué', '5ème'];

  student = new Student();

  constructor(private adminService:AdminService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addStudent(){
    this.adminService.addStudent(this.cloneObject(this.student));
    this.addStudentForm.resetForm();
  }

  cloneObject(obj: any) {
    return Object.assign({}, obj);
  }


  onImport(){
    this.openDialog(ImportDataFromFileComponent, '50%');
  }

  openDialog(component, height) {
    let config = new MatDialogConfig();
    config = {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: height,
      width: '50%',
    };
    const dialogRef = this.dialog.open(component,config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
