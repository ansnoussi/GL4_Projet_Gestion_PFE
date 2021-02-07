import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../../../models/Session';
import { SessionService } from '../../../../services/session/session.service';

@Component({
  selector: 'gl4-add-subject-to-session',
  templateUrl: './add-subject-to-session.component.html',
  styleUrls: ['./add-subject-to-session.component.css']
})
export class AddSubjectToSessionComponent implements OnInit {


  sessions:Session[]=[];
  session:Session=new Session();
  time: string;

  constructor(private sessionService:SessionService) {
    this.sessions = this.sessionService.getSessions();
   }


   onAddSession(){
     this.sessionService.onAddSessionToSubject(this.session, this.time);
   }

  ngOnInit(): void {
  }

}
