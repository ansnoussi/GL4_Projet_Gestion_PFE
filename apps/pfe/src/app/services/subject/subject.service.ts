import { Injectable } from '@angular/core';
import { Subject } from '../../models/Subject';
import { StudentService } from '../student/student.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
 
  

  subjectToRefuse: Subject=new Subject();
  refusedSubjects:any[]=[];
  acceptedSubjects:Subject[]=[
    {
      title: 'Application OMS accepted 1',
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
      },
      tools:["AI","angular","nodejs"]

    },
    {
      title: 'Application OMS accepted 2',
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
      },
      tools:["AI","angular","nodejs"]

    },
    {
      title: 'Application OMS accepted 3',
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
      },
      tools:["AI","angular","nodejs"]

    }
  ];

  pendingSubjects:Subject[]=[
    {
      title: 'Application OMS pending 1',
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
      },
      tools:["AI","angular","nodejs"]

    },
    {
      title: 'Application OMS pending 2',
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
      },
      tools:["AI","angular","nodejs"]

    },
    {
      title: 'Application OMS pending 3',
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
      },
      tools:["AI","angular","nodejs"]

    }
  ];


  getAcceptedSubjects() {
    return(this.acceptedSubjects);
  }

  addAcceptedSubject(subject:Subject){
    this.acceptedSubjects.push(subject);
    this.pendingSubjects.splice(this.pendingSubjects.indexOf(subject),1);
  }
  
  refuseSubject(reason:String) {
    const refusedSubject={'subject':this.subjectToRefuse,'reason':reason};
    console.log('refusedSubject');
    console.log(refusedSubject);
    this.pendingSubjects.splice(this.pendingSubjects.indexOf(this.subjectToRefuse),1);
    this.refusedSubjects.push(refusedSubject);
  }


  addSubject(subject: Subject) {
    this.pendingSubjects.unshift(subject);    
  }

  getPendingSubjects(){
    return(this.pendingSubjects);
  }


  setSubjectToRefuse(subject: Subject) {
    this.subjectToRefuse=subject;
  }


  
  isAccepted(subject: Subject) {
    for(let subjectItem of this.acceptedSubjects){
      if(subject==subjectItem){
        return(true);
      }
    }
    return(false);
  }
  
  


  constructor() { }
}
