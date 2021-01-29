import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Student';
import { AdminService } from '../../../services/admin/admin.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploaderRapportPFEComponent } from '../../student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { ImportDataFromFileComponent } from '../import-data-from-file/import-data-from-file.component';

@Component({
  selector: 'gl4-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  specialities: any = ['Génie logiciel', 'Informatique Industrielle et Automatique','Instrumentation et Maintenance Industrielle','Réseaux Informatiques et Télécommunications','Chimie Industrielle','Biologie Industrielle'];
  studyLevels: any = ['3ème licence appliqué', '5ème'];

  student:Student = new Student();

  constructor(private adminService:AdminService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addStudent(){
    this.adminService.addStudent(this.student);
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
