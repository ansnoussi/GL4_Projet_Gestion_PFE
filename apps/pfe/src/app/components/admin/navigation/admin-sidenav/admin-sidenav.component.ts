import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploaderRapportPFEComponent } from '../../../student/uploader-rapport-pfe/uploader-rapport-pfe.component';
import { AddAUComponent } from '../../add-au/add-au.component';

@Component({
  selector: 'gl4-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  onAddUniversityYear(){
    this.openDialog();
  }

  onAddStudent(){
    this.router.navigateByUrl('admin/add-student');
    this.onSidenavClose();
  }

  onAddProfessor(){
    this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  onCheckPendingSubjects(){
    //this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  onCheckPFEs(){
    //this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  onAddSession(){
    //this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  openDialog() {

    this.sidenavClose.emit();

    let config = new MatDialogConfig();
    config = {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '60%',
      width: '50%',
    };
    const dialogRef = this.dialog.open(AddAUComponent,config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
