import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'gl4-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:any;

  @Input() public showSideMenu;
  logout(){
    this.loginService.logout();
  }

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private loginService:LoginService) {
    if(localStorage.getItem('usernameAdmin')){
      this.username=localStorage.getItem('usernameAdmin');
    }
    if(localStorage.getItem('usernameProfessor')){
      this.username=localStorage.getItem('usernameProfessor');
    }
    if(localStorage.getItem('usernameStudent')){
      this.username=localStorage.getItem('usernameStudent');
    }
  }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
