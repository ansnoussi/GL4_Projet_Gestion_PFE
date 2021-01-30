import { Component, OnInit, ViewChild } from '@angular/core';
import { Professor } from '../../../models/Professor';
import { AdminService } from '../../../services/admin/admin.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImportDataFromFileComponent } from '../import-data-from-file/import-data-from-file.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'gl4-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  @ViewChild('addProfessorForm', {static: false}) addProfessorForm: NgForm;

  professor:Professor=new Professor();

  constructor(private adminService:AdminService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  addProfessor(){
    this.adminService.addProfessor(this.professor);
    this.addProfessorForm.resetForm();
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
