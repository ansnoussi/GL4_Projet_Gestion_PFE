import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject/subject.service';

@Component({
  selector: 'gl4-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private subjectService:SubjectService) {
    this.subjectService.addAcceptedSubject({
      title: 'Application OMS',
      objective: 'Conception et réalisation d’une application permettant la gestion des ordres d’achat, du planning des ventes et de génération de bordereaux de facturation.',
      startDate: '01/02/2021',
      endDate: '01/08/2021',
      student: {
        firstname: 'Mohamed Lamine',
        lastname: 'BARGHOUDA',
        address: 'Cité Olympique',
        city: 'Tunis',
        email: 'laminebarghouda@gmail.com',
        phone: '58014893',
        ID: '1700000',
        nationality: 'Tunisienne',
        passport: null,
        nationalIdentityCard: '09777111',
        postalCode: '1003',
        speciality: 'GL',
        studyLevel: '5'
      },
      enterpriseSupervisor: {
        lastname: 'BEN FOULEN',
        firstname: 'Flen',
        postalCode: 'XX458CB',
        phone: "98554778",
        email: 'mail@startup.tn',
        fax: '76420000',
        grade: 'Grade'
      },
      universitySupervisor: {
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
        passport: null
      },
      enterprise: {
        phone: '71445888',
        description: 'nova Robotics conçoit, fabrique et commercialise des robots mobiles dans le domaine de la sécurité, la santé et la logistique.',
        country: 'France',
        city: 'Paris',
        postalCode: 'PR0005',
        address: 'Nailly sur saine, 76000',
        responsible: 'Martin DUPONT',
        email: "mail@entreprise.fr",
        fax: '001455778552',
        name: "SMART IT SARL",
        website: 'smartIT.fr'
      }

    })
    this.subjectService.addAcceptedSubject(this.subjectService.getAcceptedSubjects()[0]);
    this.subjectService.addAcceptedSubject(this.subjectService.getAcceptedSubjects()[0]);
    this.subjectService.addAcceptedSubject(this.subjectService.getAcceptedSubjects()[0]);
    this.subjectService.addAcceptedSubject(this.subjectService.getAcceptedSubjects()[0]);
    this.subjectService.addAcceptedSubject(this.subjectService.getAcceptedSubjects()[0]);
   }

  ngOnInit(): void {
  }


}
