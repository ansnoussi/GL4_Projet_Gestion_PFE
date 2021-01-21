import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  login(username, password){
    this.router.navigate(['/student']).then(r =>     console.log('username: ', username,' password: ', password));
  }



}
