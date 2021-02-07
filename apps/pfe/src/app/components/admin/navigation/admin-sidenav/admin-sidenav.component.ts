import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddAUComponent } from '../../add-au/add-au.component';
import { AddSessionComponent } from '../../add-session/add-session.component';

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
    this.onSidenavClose();
    this.openDialog(AddAUComponent, '50%');
  }

  onAddStudent(){
    this.onSidenavClose();
    this.router.navigateByUrl('admin/add-student');
  }

  onAddProfessor(){
    this.onSidenavClose();
    this.router.navigateByUrl('admin/add-professor');
  }

  onCheckPendingSubjects(){
    this.router.navigateByUrl('admin/pending-subjects');
    this.onSidenavClose();
  }

  onCheckPFEs(){
    this.onSidenavClose();
    this.router.navigateByUrl('admin/pfes');
  }

  onAddSession(){
    this.onSidenavClose();
    this.openDialog(AddSessionComponent, '90%')
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
