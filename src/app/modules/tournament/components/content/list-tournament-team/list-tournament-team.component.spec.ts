import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTournamentTeamComponent } from './list-tournament-team.component';

describe('ListTournamentTeamComponent', () => {
  let component: ListTournamentTeamComponent;
  let fixture: ComponentFixture<ListTournamentTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTournamentTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTournamentTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
