import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'apps/pfe/src/app/models/Session';
import { SessionService } from 'apps/pfe/src/app/services/session/session.service';

@Component({
  selector: 'gl4-add-subject-to-session',
  templateUrl: './add-subject-to-session.component.html',
  styleUrls: ['./add-subject-to-session.component.css']
})
export class AddSubjectToSessionComponent implements OnInit {


  sessions:Session[]=[];
  session:Session=new Session();

  constructor(private sessionService:SessionService) {
    this.sessions = this.sessionService.getSessions();
   }


   onAddSession(){
     console.log('session to add to subject');
     console.log(this.session);
     this.sessionService.onAddSessionToSubject(this.session);
   }

  ngOnInit(): void {
  }

}
