import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { MatchService } from '../../../match.service';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss'],
})
export class ListMatchComponent {
  formFilter!: FormGroup;
  formEdit!: FormGroup;
  coloumnForm!: FormGroup;
  players: any;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  formGroup: FormGroup;
  tournaments: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrCommonService,
    public dialog: MatDialog,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.matchService.getMatch().subscribe((res: any) => {
      this.players = res.result;
    });
    this.formGroup = this.formBuilder.group({
      tournamentId: [''], // initial value for country select
    });
  }
  openDialog(data: any) {
    // console.log(data);
    // this.dialog.open(DialogUpdatePlayerComponent, {
    //   data: data,
    //   width: '550px',
    // });
  }
  onSubmit() {
    // this.teamService.getTeam(this.formGroup.value).subscribe((res: any) => {
    //   this.teams = res.result;
    // });
    // // Handle form submission here
  }
  onDelete(id: number) {
    // this.PlayerService.deletePlayer(id).subscribe((res: any) => {});
  }
}
