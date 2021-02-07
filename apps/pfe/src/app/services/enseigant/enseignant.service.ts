import { Injectable } from '@angular/core';
import { Subject } from '../../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  

  supervisionList:Subject[]=[];



  getSupervisionList(){
    return(this.supervisionList);
  }

  constructor() { }
}
