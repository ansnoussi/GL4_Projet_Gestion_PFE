import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReasonComponent } from '../reason/reason.component';
import { Subject } from '../../../../models/Subject';
import { PfeService } from '../../../../services/pfe/pfe.service';
import { SubjectService } from '../../../../services/subject/subject.service';

@Component({
  selector: 'gl4-item-pending-subject',
  templateUrl: './item-pending-subject.component.html',
  styleUrls: ['./item-pending-subject.component.css']
})
export class ItemPendingSubjectComponent implements OnInit {

  @Input() subject:Subject=new Subject();

  @Output() sidenavClose = new EventEmitter();

  constructor(private subjectService:SubjectService, private pfeService:PfeService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  acceptSubject(){
    this.subjectService.addAcceptedSubject(this.cloneObject(this.subject));
    this.pfeService.acceptSubject(this.subject);
  }

  cloneObject(obj: any) {
    return Object.assign({}, obj);
  }


  onRefuse(){
    this.subjectService.setSubjectToRefuse(this.subject);
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
