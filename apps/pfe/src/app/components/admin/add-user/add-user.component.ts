import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'gl4-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  Roles: any = ['Etudiant', 'Enseignant'];

  user = {
  'username':'',
  'email':'',
  'password':'',
  'role':''
  };

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.adminService.addUser(this.user);
  }



}
