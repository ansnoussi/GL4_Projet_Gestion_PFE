import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Session } from '../../../models/Session';
import { SessionService } from '../../../services/session/session.service';
import { Speciality } from '../../../models/Speciality';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadedFile } from '@nestjs/common';

@Component({
  selector: 'gl4-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  specialities: Speciality[] = [
    {
    ID: 'GL',
    name: 'Génie Logiciel'
    },
    {
      ID: 'IIA',
      name: 'Informatique Industrielle et Automatique'
    },
    {
      ID: 'IMI',
      name: 'Instrumentation et Maintenance Industrielle'
    },
    {
      ID: 'RT',
      name: 'Réseaux Informatiques et Télécommunications'
    },
    {
      ID: 'CH',
      name: 'Chimie Industrielle'
    },
    {
      ID: 'BIO',
      name: 'Biologie Industrielle'
    },
  ]
  professors = [{
    lastname: 'SELLAOUTI',
    firstname: 'Aymen',
    postalCode: 'XX458CB',
    phone: "98554778",
    email: 'mail@startup.tn',
    grade: 'Maitre assisstant',
    address: 'Cite Khadhra',
    city: 'Tunis',
    ID: "00014526",
    nationalIdentityCard: '0978555',
    nationality: 'Tunisienne',
    passport: null,
  }, {
    lastname: 'SFAXI',
    firstname: 'Lilia',
    postalCode: 'XX458CB',
    phone: "98554778",
    email: 'mail@startup.tn',
    grade: 'Maitre assisstant',
    address: 'Cite Khadhra',
    city: 'Tunis',
    ID: "00014526",
    nationalIdentityCard: '0978555',
    nationality: 'Tunisienne',
    passport: null,
  }, {
    lastname: 'JEMAI',
    firstname: 'Abderazek',
    postalCode: 'XX458CB',
    phone: "98554778",
    email: 'mail@startup.tn',
    grade: 'Maitre assisstant',
    address: 'Cite Khadhra',
    city: 'Tunis',
    ID: "00014526",
    nationalIdentityCard: '0978555',
    nationality: 'Tunisienne',
    passport: null,
  }]


  public session = new Session();
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  onAddSession(){
    this.sessionService.addSession(this.session);
  }

}
