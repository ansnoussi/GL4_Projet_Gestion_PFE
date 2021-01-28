import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfesListComponent } from './pfes-list.component';

describe('PfesListComponent', () => {
  let component: PfesListComponent;
  let fixture: ComponentFixture<PfesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
