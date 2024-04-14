import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PlayerService } from '../../../player.service';
import { DialogUpdatePlayerComponent } from '../../dialog/dialog-update-player/dialog-update-player.component';
@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.scss'],
})
export class ListPlayerComponent {
  formFilter!: FormGroup;
  formEdit!: FormGroup;
  coloumnForm!: FormGroup;
  players: any;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrCommonService,
    private PlayerService: PlayerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.PlayerService.getPlayer().subscribe((res: any) => {
      this.players = res.result;
    });
    // this.formGroup = this.formBuilder.group({
    //   country: [''], // initial value for country select
    //   teamName: [''], // initial value for teamName select
    // });
  }
  openDialog(data: any) {
    console.log(data);
    this.dialog.open(DialogUpdatePlayerComponent, {
      data: data,
      width: '550px',
    });
  }
  onSubmit() {
    // this.teamService.getTeam(this.formGroup.value).subscribe((res: any) => {
    //   this.teams = res.result;
    // });
    // // Handle form submission here
  }
  onDelete(id: number) {
    this.PlayerService.deletePlayer(id).subscribe((res: any) => {});
  }
}
