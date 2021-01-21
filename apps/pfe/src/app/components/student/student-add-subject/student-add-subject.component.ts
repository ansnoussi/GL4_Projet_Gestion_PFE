import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }



  specialite: any = ['Biologie Industrielle', 'Chimie Industrielle', 'Informatique Industrielle et Automatique','Instrumentation et Maintenance Industrielle','Réseaux Informatiques et Télécommunications','Génie Logiciel'];
  niveau:any = ['3ème','4ème','5ème']



    sujet={
      'titre':'',
      'objectif':'',
      'date_debut':'',
      'date_fin':''
    } 

    student = {
      'specialite':'',
      'nom':'',
      'prenom':'',
      'niveau':'',
      'numIns':'',
      'cin':'',
      'nationnalite':'',
      'passeport':'',
      'adresse':'',
      'codePostal':'',
      'ville':'',
      'email':'',
      'tel':''
    }

    entreprise = {
      'responsable':'',
      'adresse':'',
      'codePostal':'',
      'ville':'',
      'pays':'',
      'tel':'',
      'fax':'',
      'email':'',
      'website':''
    }

    encadrantEntreprise = {
      'nom':'',
      'prenom':'',
      'grade':'',
      'tel':'',
      'poste':'',
      'fax':'',
      'mobile':'',
      'email':''
    }



    ajouterSujet(){
      console.log("Sujet:", this.sujet);
      console.log("Studant:", this.student);
      console.log("Entreprise:", this.entreprise);
      console.log("Encadrant:", this.encadrantEntreprise);
    }


 
}
