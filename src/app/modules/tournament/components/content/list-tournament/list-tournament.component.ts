import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TeamService } from 'src/app/modules/teams/team.service';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { TournamentService } from '../../../tournament.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DialogUpdateTournamentComponent } from '../../dialog/dialog-update-tournament/dialog-update-tournament.component';
@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.scss'],
})
export class ListTournamentComponent {
  formFilter!: FormGroup;
  tournament: any;
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
      this.tournament = res.result;
    });
    this.formGroup = this.formBuilder.group({
      country: [''], // initial value for country select
      teamName: [''], // initial value for teamName select
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
    // this.teamService.getTeam(this.formGroup.value).subscribe((res: any) => {
    //   this.teams = res.result;
    // });
    // Handle form submission here
  }
  onDelete(id: number) {
    this.tournamentService.deleteTeam(id).subscribe((res: any) => {});
  }
}
