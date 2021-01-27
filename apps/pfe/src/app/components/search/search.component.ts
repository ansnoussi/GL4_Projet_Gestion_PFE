import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl4-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }


  universityYears = ['2020/2021','2019/2020','2018/2019'];
  public universityYearSelected = '2020/2021';

  ngOnInit(): void {
  }

}
