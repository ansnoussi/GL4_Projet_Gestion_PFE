import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addSubject(subject){
    console.log(subject)
  }

  constructor() { }


}
