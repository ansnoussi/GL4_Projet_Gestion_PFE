import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'gl4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, private router:Router) {
    if(localStorage.getItem('usernameAdmin')){
      this.router.navigate(['admin']);
    }
    if(localStorage.getItem('usernameProfessor')){
      this.router.navigate(['professor']);
    }
    if(localStorage.getItem('usernameStudent')){
      this.router.navigate(['student']);
    }
    if(!(localStorage.getItem('usernameAdmin')||localStorage.getItem('usernameProfessor')||localStorage.getItem('usernameStudent'))){
      this.router.navigate(['login']);
    }
  }
}
