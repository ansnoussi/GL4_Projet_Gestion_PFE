import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css']
})
export class ListPfeComponent implements OnInit {


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
