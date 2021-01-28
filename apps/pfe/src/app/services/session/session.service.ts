import { Injectable } from '@angular/core';
import { Session } from '../../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions:Session[]=[];

  constructor() { }

  addSession(session: Session) {
    this.sessions.push(session);
    console.log(this.sessions);
  }


}
