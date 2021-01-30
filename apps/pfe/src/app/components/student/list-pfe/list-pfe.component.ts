import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject/subject.service';
import { PFE } from '../../../models/PFE';

@Component({
  selector: 'gl4-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css']
})
export class ListPfeComponent implements OnInit {


  listPfe:PFE[] = [];

  constructor(private subjectService:SubjectService) {
    const subjects = this.subjectService.getAllSubjects();
    subjects.forEach(subject => {
      this.listPfe.push({
        subject: subject,
        examiner: {
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
        },
        session: {
          juryPresident: {
            lastname: 'BEN FOULEN',
            firstname: 'Flen',
            postalCode: 'XX458CB',
            phone: "98554778",
            email: 'mail@startup.tn',
            grade: 'Maitre assisstant',
            address: 'Cite Khadhra',
            city: 'Tunis',
            ID: "00014526",
            nationalIdentityCard: '0978555',
            nationality: 'Tunisienne',
            passport: null
          },
          date: "07/10/2021",
          room: '2B6-1',
          sessionID: 1,
          speciality:{
            ID: 'GL',
            name: 'Génie Logiciel'
          }
        },
        presentationTime : '8:30',
      })
    })
  }

  ngOnInit(): void {
  }

}

