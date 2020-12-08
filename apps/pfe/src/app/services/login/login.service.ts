import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username, password){
    console.log('username: ', username,' password: ', password);
  }



}
