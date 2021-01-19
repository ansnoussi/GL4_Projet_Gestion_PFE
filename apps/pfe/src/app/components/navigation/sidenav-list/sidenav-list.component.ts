import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gl4-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addSubject(){
    this.router.navigateByUrl('add-subject');
    this.onSidenavClose();
  }

  onUploadPfe(){
     this.router.navigateByUrl('uploader-rapport-pfe');
    this.onSidenavClose();
  }

  listPfe(){
    this.router.navigateByUrl('list-pfe');

  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
