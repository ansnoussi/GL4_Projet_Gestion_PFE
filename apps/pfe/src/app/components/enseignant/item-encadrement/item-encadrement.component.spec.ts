import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEncadrementComponent } from './item-encadrement.component';

describe('ItemEncadrementComponent', () => {
  let component: ItemEncadrementComponent;
  let fixture: ComponentFixture<ItemEncadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEncadrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
