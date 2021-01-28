import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeItemAdminComponent } from './pfe-item-admin.component';

describe('PfeItemAdminComponent', () => {
  let component: PfeItemAdminComponent;
  let fixture: ComponentFixture<PfeItemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeItemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
