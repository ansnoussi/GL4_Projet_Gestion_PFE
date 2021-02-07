import { Injectable } from '@angular/core';
import { Professor } from '../../models/Professor';
import { Student } from '../../models/Student';
import { Speciality } from '../../models/Speciality';
import { UniversityYear } from '../../models/UniversityYear';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  students:Student[]=[];

  // Initialisation pour les tests
  universityYears: UniversityYear[] = [
    {
      name:"2017/2018",
    },
    {
      name:"2018/2019",
    },
    {
      name:"2019/2020",
    },
    {
      name:"2020/2021",
    },
  ]

  // Initialisation pour les tests
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

  // Initialisation pour les tests
  professors: Professor[] = [{
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

  constructor() { }

  addStudent(student){
    this.students.push(student);
  }


  getStudents(){
    return this.students;
  }

  addProfessor(professor:Professor){
    this.professors.push(professor);
  }


  getProfessors(){
    return this.professors;
  }

  getSpecialities(){
    return this.specialities;
  }

  getUniversityYears(){
    return this.universityYears;
  }


  addUniversityYear(universityYear: UniversityYear) {
    this.universityYears.push(universityYear)
  }


}
