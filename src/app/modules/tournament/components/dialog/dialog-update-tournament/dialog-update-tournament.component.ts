import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TournamentService } from '../../../tournament.service';
@Component({
  selector: 'app-dialog-update-tournament',
  templateUrl: './dialog-update-tournament.component.html',
  styleUrls: ['./dialog-update-tournament.component.scss'],
})
export class DialogUpdateTournamentComponent {
  teamForm: FormGroup;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private tournamentService: TournamentService,
    @Inject(MAT_DIALOG_DATA) public dataInject: any
  ) {
    this.data = dataInject;
  }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      tournament_name: [this.dataInject.tournamentName, Validators.required],
      start_date: [this.dataInject.startDate, Validators.required],
      end_date: [this.dataInject.endDate, Validators.required],
    });
  }

  onSubmit() {
    this.tournamentService.updateTeamInfo(this.teamForm.value).subscribe();
  }
}
