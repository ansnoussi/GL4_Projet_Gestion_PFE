import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  studentLogged = false;
  adminLogged = false;
  professorLogged = false;
  user:{username:string, password:string};



  professors=[
    {username:"professor1", password:"professor1"},
    {username:"professor2", password:"professor2"},
    {username:"professor3", password:"professor3"}
  ];
  students=[
    {username:"student1", password:"student1"},
    {username:"student2", password:"student2"},
    {username:"student3", password:"student3"}
  ];
  admins=[
    {username:"admin", password:"admin"}
  ];


  constructor(private router: Router) { }

  login(username:string, password:string){

    const user = {username:username,password:password};

    if(this.exist(user,this.admins)==true){
      localStorage.setItem('usernameAdmin', username);
      this.loginAdmin();
    }

    if(this.exist(user,this.professors)==true){
      localStorage.setItem('usernameProfessor', username);
      this.loginProfessor();
    }


    if(this.exist(user,this.students)==true){
      localStorage.setItem('usernameStudent', username);
      this.loginStudent();
    }
  
  }




 
  exist(user: { username: string; password: string; }, users: { username: string; password: string; }[]) {
    
    for(let userItem of users){
      if(((userItem.username == user.username) && (userItem.password==user.password))==true){
        return true;
      }
    }
    return false;
  }
  


  loginStudent(){
    this.studentLogged = true;
    this.router.navigate(['student']);
  }

  loginAdmin(){
    this.adminLogged = true;
    this.router.navigate(['admin']);
  }

  loginProfessor(){
    this.professorLogged = true;
    this.router.navigate(['professor']);
  }


  logout(){
    this.professorLogged = false;
    this.adminLogged = false;
    this.professorLogged = false;
    localStorage.clear();
    this.router.navigate(['login']);
  }





}
