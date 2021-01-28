import { Component, OnInit } from '@angular/core';
import { Session } from '../../../models/Session';

@Component({
  selector: 'gl4-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  specialities: any = ['Génie logiciel', 'Informatique Industrielle et Automatique', 'Instrumentation et Maintenance Industrielle', 'Réseaux Informatiques et Télécommunications', 'Chimie Industrielle', 'Biologie Industrielle'];

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
  }]


  public session = new Session();
  constructor() { }

  ngOnInit(): void {
  }

}
