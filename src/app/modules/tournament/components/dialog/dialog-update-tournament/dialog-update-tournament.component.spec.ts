import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateTournamentComponent } from './dialog-update-tournament.component';

describe('DialogUpdateTournamentComponent', () => {
  let component: DialogUpdateTournamentComponent;
  let fixture: ComponentFixture<DialogUpdateTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
