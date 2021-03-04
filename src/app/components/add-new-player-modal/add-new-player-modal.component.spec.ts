import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlayerModalComponent } from './add-new-player-modal.component';

describe('AddNewPlayerModalComponent', () => {
  let component: AddNewPlayerModalComponent;
  let fixture: ComponentFixture<AddNewPlayerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPlayerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
