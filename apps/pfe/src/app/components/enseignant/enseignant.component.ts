import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {


  listEnc:any=[
    {titre:'sujet2',etudiant:'etudiant2',description:'description2',date:'01/12/2020'},
    {titre:'sujet2',etudiant:'etudiant2',description:'description2',date:'01/12/2020'},
    {titre:'sujet2',etudiant:'etudiant2',description:'description2',date:'01/12/2020'},
    {titre:'sujet2',etudiant:'etudiant2',description:'description2',date:'01/12/2020'},
    {titre:'sujet2',etudiant:'etudiant2',description:'description2',date:'01/12/2020'},
  ];

  listPfe:any=[
    {titre:'Conception et Réalisation d’une application des gestions des activités d’un conseil de développement',etudiant:'etudiant',description:'description',date:'01/12/2020'},
    {titre:'sujet1',etudiant:'etudiant',description:'description',date:'01/12/2020'},
    {titre:'sujet1',etudiant:'etudiant',description:'description',date:'01/12/2020'},
    {titre:'sujet1',etudiant:'etudiant',description:'description',date:'01/12/2020'},
    {titre:'sujet1',etudiant:'etudiant',description:'description',date:'01/12/2020'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
