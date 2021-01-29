import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PFE } from 'apps/pfe/src/app/models/PFE';
import { SessionService } from 'apps/pfe/src/app/services/session/session.service';
import { AddSubjectToSessionComponent } from '../add-subject-to-session/add-subject-to-session.component';

@Component({
  selector: 'gl4-pfe-item-admin',
  templateUrl: './pfe-item-admin.component.html',
  styleUrls: ['./pfe-item-admin.component.css']
})
export class PfeItemAdminComponent implements OnInit {
  @Input() pfe:PFE;

  constructor(public dialog: MatDialog, private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  accederSession(){
    this.sessionService.setSelectedPFE(this.pfe);
    this.openDialog(AddSubjectToSessionComponent, '50%');
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
