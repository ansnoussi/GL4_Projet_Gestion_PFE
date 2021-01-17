import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPfeComponent } from './item-pfe.component';

describe('ItemPfeComponent', () => {
  let component: ItemPfeComponent;
  let fixture: ComponentFixture<ItemPfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
