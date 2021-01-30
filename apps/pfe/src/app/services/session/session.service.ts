import { Injectable } from '@angular/core';
import { PFE } from '../../models/PFE';
import { Session } from '../../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  selectedPFE: PFE = new PFE();
  sessions:Session[]=[];

  constructor() { }

  addSession(session: Session) {
    this.sessions.push(session);
    console.log(this.sessions);
  }


  getSessions(): Session[] {
     return(this.sessions);
  }

  onAddSessionToSubject(session: Session, time: string) {
    this.selectedPFE.session=session;
    this.selectedPFE.presentationTime = time;
  }

  setSelectedPFE(pfe: PFE) {
    this.selectedPFE=pfe;
  }


}
