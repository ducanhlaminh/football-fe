import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TournamentService } from '../../../tournament.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent {
  teamForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tournamentService: TournamentService
  ) {}

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      tournamentName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onSubmit() {
    this.tournamentService.createTeam(this.teamForm.value).subscribe();
  }
}
