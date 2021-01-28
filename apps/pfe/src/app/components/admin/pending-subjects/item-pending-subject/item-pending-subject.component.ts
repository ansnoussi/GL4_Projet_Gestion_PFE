import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'apps/pfe/src/app/models/Subject';
import { SubjectService } from 'apps/pfe/src/app/services/subject/subject.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReasonComponent } from '../reason/reason.component';

@Component({
  selector: 'gl4-item-pending-subject',
  templateUrl: './item-pending-subject.component.html',
  styleUrls: ['./item-pending-subject.component.css']
})
export class ItemPendingSubjectComponent implements OnInit {

  @Input() subject:Subject=new Subject();

  @Output() sidenavClose = new EventEmitter();

  constructor(private subjectService:SubjectService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  acceptSubject(){
    this.subjectService.acceptSubject(this.subject);
  }

  refuseSubject(){
    this.subjectService.refuseSubject(this.subject);
  }

  onRefuse(){
    this.openDialog(ReasonComponent, '50%')
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
