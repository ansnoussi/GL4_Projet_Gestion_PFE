import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gl4-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logout(){
    
    this.router.navigateByUrl('login');
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
