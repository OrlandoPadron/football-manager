import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailsModalComponent } from './player-details-modal.component';

describe('PlayerDetailsModalComponent', () => {
  let component: PlayerDetailsModalComponent;
  let fixture: ComponentFixture<PlayerDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
