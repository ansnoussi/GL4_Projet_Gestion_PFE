import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { UniversityYear } from '../../models/UniversityYear';

@Component({
  selector: 'gl4-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  universityYears: UniversityYear[] = [];
  @Output() public universityYear = new EventEmitter<string>();
  @Output() public search = new EventEmitter<string>();
  universityYearSelected: UniversityYear;
  query = '';



  constructor(private adminService: AdminService) {
    this.universityYears = adminService.getUniversityYears();
  }



  ngOnInit(): void {
  }

  onUniversityYearSelectedChange(){
    this.universityYear.emit(this.universityYearSelected.name);
  }

  onSearchChange(){
    this.search.emit(this.query.toLowerCase());
  }

}
