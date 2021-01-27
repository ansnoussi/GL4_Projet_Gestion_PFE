import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject/subject.service';

@Component({
  selector: 'gl4-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private subjectService: SubjectService) {
    this.subjectService.addSubject({
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
  }

  showFiller = false;

  ngOnInit(): void {
  }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
  }


}
