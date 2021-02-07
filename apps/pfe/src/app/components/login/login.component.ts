import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'


@Component({
  selector: 'gl4-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any='';
  password:any='';

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.username,this.password);
  }



}
