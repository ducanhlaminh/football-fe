import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TeamService } from 'src/app/modules/teams/team.service';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { TournamentService } from '../../../tournament.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DialogUpdateTournamentComponent } from '../../dialog/dialog-update-tournament/dialog-update-tournament.component';

@Component({
  selector: 'app-list-tournament-team',
  templateUrl: './list-tournament-team.component.html',
  styleUrls: ['./list-tournament-team.component.scss'],
})
export class ListTournamentTeamComponent {
  formFilter!: FormGroup;
  tournaments: any;
  tournamentTeams: any;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrCommonService,
    private tournamentService: TournamentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tournamentService.getTeam().subscribe((res: any) => {
      this.tournaments = res.result;
    });
    this.formGroup = this.formBuilder.group({
      tournamentId: [''], // initial value for country select
    });
  }
  openDialog(data: any) {
    console.log(data);
    this.dialog.open(DialogUpdateTournamentComponent, {
      data: data,
      width: '500px',
    });
  }
  onSubmit() {
    this.tournamentService
      .getTournamentTeams(this.formGroup.value.tournamentId)
      .subscribe((res: any) => {
        this.tournamentTeams = res.result;
      });
  }
  onDelete(id: number) {
    this.tournamentService
      .deleteTournamentTeams(this.formGroup.value.tournamentId, id)
      .subscribe();
  }
}
