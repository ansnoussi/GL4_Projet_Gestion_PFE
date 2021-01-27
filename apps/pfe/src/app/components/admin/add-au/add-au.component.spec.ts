import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAUComponent } from './add-au.component';

describe('AddAUComponent', () => {
  let component: AddAUComponent;
  let fixture: ComponentFixture<AddAUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
