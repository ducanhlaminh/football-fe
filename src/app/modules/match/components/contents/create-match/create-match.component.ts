import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/modules/teams/team.service';
import { TournamentService } from 'src/app/modules/tournament/tournament.service';
import { MatchService } from '../../../match.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss'],
})
export class CreateMatchComponent {
  matchForm: FormGroup;
  homeForm: FormGroup;
  awayHome: FormGroup;
  tournaments: any;
  teams: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService,
    private teamService: TeamService,
    private tournamentService: TournamentService
  ) {}

  ngOnInit(): void {
    this.matchForm = this.formBuilder.group({
      stadium: ['', Validators.required],
      matchDate: ['', Validators.required],
      tournament_id: ['', Validators.required],
    });
    this.homeForm = this.formBuilder.group({
      type: ['Home', Validators.required],
      match_match_id: ['', Validators.required],
      team_team_id: ['', Validators.required],
    });
    this.awayHome = this.formBuilder.group({
      type: ['Away', Validators.required],
      match_match_id: ['', Validators.required],
      team_team_id: ['', Validators.required],
    });
    this.teamService
      .getTeam()
      .subscribe((res: any) => (this.teams = res.result));
    this.tournamentService
      .getTeam()
      .subscribe((res: any) => (this.tournaments = res.result));
  }

  createMatch() {
    this.matchService
      .createMatch(this.matchForm.value)
      .subscribe((res: any) => {
        this.homeForm.patchValue({ match_match_id: res.result.matchId });
        this.awayHome.patchValue({ match_match_id: res.result.matchId });
      });
  }
  createHome() {
    this.matchService.createTeamMatch(this.homeForm.value).subscribe();
  }
  createAway() {
    this.matchService.createTeamMatch(this.awayHome.value).subscribe();
  }
}
