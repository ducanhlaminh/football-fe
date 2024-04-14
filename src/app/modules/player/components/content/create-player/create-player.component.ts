import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/modules/teams/team.service';
import { PlayerService } from '../../../player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss'],
})
export class CreatePlayerComponent {
  playerForm: FormGroup;
  teams: any;
  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private teamService: TeamService
  ) {}
  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      nationality: ['', Validators.required],
      position: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      team_id: ['', Validators.required],
    });
    this.teamService
      .getTeam()
      .subscribe((res: any) => (this.teams = res.result));
  }

  onSubmit() {
    this.playerService.createPlayer(this.playerForm.value).subscribe();
  }
}
