import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploaderRapportPFEComponent } from '../../student/uploader-rapport-pfe/uploader-rapport-pfe.component';

@Component({
  selector: 'gl4-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddSubject(){
    this.router.navigateByUrl('student/add-subject');
    this.onSidenavClose();
  }


  onListPfe(){
    this.router.navigateByUrl('student/list-pfe');
    this.onSidenavClose();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
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
    const dialogRef = this.dialog.open(UploaderRapportPFEComponent,config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
