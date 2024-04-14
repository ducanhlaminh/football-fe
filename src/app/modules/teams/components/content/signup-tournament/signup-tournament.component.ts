import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentService } from 'src/app/modules/tournament/tournament.service';
import { TeamService } from '../../../team.service';

@Component({
  selector: 'app-signup-tournament',
  templateUrl: './signup-tournament.component.html',
  styleUrls: ['./signup-tournament.component.scss'],
})
export class SignupTournamentComponent {
  teamForm: FormGroup;
  teams: any;
  tournaments: any;
  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private tournamentService: TournamentService
  ) {}

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      team_id: ['', Validators.required],
      tournament_id: ['', Validators.required],
    });
    this.teamService
      .getTeam()
      .subscribe((res: any) => (this.teams = res.result));
    this.tournamentService
      .getTeam()
      .subscribe((res: any) => (this.tournaments = res.result));
  }

  onSubmit() {
    this.teamService.signUpTournament(this.teamForm.value).subscribe();
  }
}
