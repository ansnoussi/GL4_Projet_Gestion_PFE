import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../models/Professor';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'gl4-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  professor:Professor=new Professor();

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }


  addProfessor(){
    this.adminService.addProfessor(this.professor);
  }



}
