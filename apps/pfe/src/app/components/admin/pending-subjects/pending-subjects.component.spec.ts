import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSubjectsComponent } from './pending-subjects.component';

describe('PendingSubjectsComponent', () => {
  let component: PendingSubjectsComponent;
  let fixture: ComponentFixture<PendingSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
