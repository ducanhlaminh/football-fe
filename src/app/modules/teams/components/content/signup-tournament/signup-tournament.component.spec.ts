import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTournamentComponent } from './signup-tournament.component';

describe('SignupTournamentComponent', () => {
  let component: SignupTournamentComponent;
  let fixture: ComponentFixture<SignupTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
