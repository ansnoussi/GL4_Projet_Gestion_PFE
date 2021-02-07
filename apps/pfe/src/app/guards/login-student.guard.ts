import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginStudentGuard implements CanActivate {

  constructor(private loginservice: LoginService,private router:Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    if(localStorage.getItem('usernameProfessor')){
      return(true);
    }
    
    if(this.loginservice.studentLogged == true){
      return true;
    }
    else{
      this.router.navigateByUrl('login');
      return false;
    }

  }

}
