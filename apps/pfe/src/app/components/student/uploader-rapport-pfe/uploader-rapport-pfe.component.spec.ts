import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderRapportPFEComponent } from './uploader-rapport-pfe.component';

describe('UploaderRapportPFEComponent', () => {
  let component: UploaderRapportPFEComponent;
  let fixture: ComponentFixture<UploaderRapportPFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaderRapportPFEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderRapportPFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
