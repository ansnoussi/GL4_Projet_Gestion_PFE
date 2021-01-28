import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPendingSubjectComponent } from './item-pending-subject.component';

describe('ItemPendingSubjectComponent', () => {
  let component: ItemPendingSubjectComponent;
  let fixture: ComponentFixture<ItemPendingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPendingSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPendingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
