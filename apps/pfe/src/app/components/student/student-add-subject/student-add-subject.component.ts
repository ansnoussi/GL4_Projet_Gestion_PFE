import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gl4-student-add-subject',
  templateUrl: './student-add-subject.component.html',
  styleUrls: ['./student-add-subject.component.css']
})
export class StudentAddSubjectComponent implements OnInit {


  pfe = {
    'titre':'',
    'entreprise':'',
    'domaine':'',
    };

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

}
