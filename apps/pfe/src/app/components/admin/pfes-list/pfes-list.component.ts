import { Component, OnInit } from '@angular/core';
import { PFE } from '../../../models/PFE';
import { SubjectService } from '../../../services/subject/subject.service';

@Component({
  selector: 'gl4-pfes-list',
  templateUrl: './pfes-list.component.html',
  styleUrls: ['./pfes-list.component.css']
})
export class PfesListComponent implements OnInit {
  pfeList:PFE[]=[];

  constructor(private subjectService:SubjectService) {
    const subjects = this.subjectService.getAllSubjects();
    subjects.forEach(subject => {
      this.pfeList.push({
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
          speciality: 'Génie Logiciel'
        },
        presentationTime : '8:30',
      })
    })

   }

  ngOnInit(): void {
  }

}
