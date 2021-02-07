import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Session } from '../../../models/Session';
import { SessionService } from '../../../services/session/session.service';
import { Speciality } from '../../../models/Speciality';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadedFile } from '@nestjs/common';
import { AdminService } from '../../../services/admin/admin.service';
import { Professor } from '../../../models/Professor';

@Component({
  selector: 'gl4-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  specialities: Speciality[];
  professors: Professor[];

  public session = new Session();

  constructor(private sessionService:SessionService, private adminService: AdminService) {
    this.specialities = adminService.getSpecialities();
    this.professors = adminService.getProfessors();
  }

  ngOnInit(): void {
  }

  onAddSession(){
    this.sessionService.addSession(this.session);
  }

}
