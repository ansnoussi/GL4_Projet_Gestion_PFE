import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { UniversityYear } from '../../../models/UniversityYear';

@Component({
  selector: 'gl4-add-au',
  templateUrl: './add-au.component.html',
  styleUrls: ['./add-au.component.css']
})
export class AddAUComponent implements OnInit {

  universityYearAdded: UniversityYear;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }


  addUniversityYear(){
    this.adminService.addUniversityYear(this.universityYearAdded);
  }

}
