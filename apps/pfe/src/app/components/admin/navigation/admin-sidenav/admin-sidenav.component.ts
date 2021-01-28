import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gl4-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  onAddUniversityYear(){
    //this.router.navigateByUrl('admin/add-university-year');
    this.onSidenavClose();
  }

  onAddStudent(){
    this.router.navigateByUrl('admin/add-student');
    this.onSidenavClose();
  }

  onAddProfessor(){
    this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  onCheckPendingSubjects(){
    //this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  onCheckPFEs(){
    //this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

  onAddSession(){
    //this.router.navigateByUrl('admin/add-professor');
    this.onSidenavClose();
  }

}
