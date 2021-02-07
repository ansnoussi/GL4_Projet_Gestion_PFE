import { Injectable } from '@angular/core';
import { PFE } from '../../models/PFE';
import { Professor } from '../../models/Professor';
import { Student } from '../../models/Student';
import { Subject } from '../../models/Subject';
import { SubjectService } from '../subject/subject.service';

@Injectable({
  providedIn: 'root'
})
export class PfeService {



  currentStudent:Student=new Student();
  currentProfessor:Professor=new Professor();


  listPfe:PFE[]=[]

  constructor(private subjectService:SubjectService) {
    const subjects = this.subjectService.getAcceptedSubjects();
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



  getPFEs(){
    return(this.listPfe);
  }


  acceptSubject(subject: Subject) {
    this.listPfe.unshift({
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
      session: null,
      presentationTime : '8:30',
    })
  }


  getStudentPFE(){
    for(const pfeItem of this.listPfe){
      if(this.currentStudent === pfeItem.subject.student){
        return(pfeItem);
      }
    }
    return(new PFE())
  }

}
