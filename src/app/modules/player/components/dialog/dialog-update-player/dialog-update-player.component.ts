import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from 'src/app/modules/teams/team.service';
import { PlayerService } from '../../../player.service';

@Component({
  selector: 'app-dialog-update-player',
  templateUrl: './dialog-update-player.component.html',
  styleUrls: ['./dialog-update-player.component.scss'],
})
export class DialogUpdatePlayerComponent {
  teamForm: FormGroup;
  data: any;
  teams: any;
  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public dataInject: any
  ) {
    this.data = dataInject;
  }

  ngOnInit(): void {
    const dateTime = new Date(this.data.dateOfBirth);

    // Lấy ngày, tháng và năm từ đối tượng Date
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Tháng tính từ 0 đến 11, nên cần cộng thêm 1
    const day = dateTime.getDate();

    // Tạo chuỗi mới với định dạng yyyy-MM-dd
    const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${
      day < 10 ? '0' : ''
    }${day}`;

    this.teamForm = this.formBuilder.group({
      playerName: [this.data.playerName, Validators.required],
      nationality: [this.data.nationality, Validators.required],
      position: [this.data.position, Validators.required],
      date_of_birth: [dateString, Validators.required],
      team_id: [this.data.team.teamId, Validators.required],
    });
    this.teamService
      .getTeam()
      .subscribe((res: any) => (this.teams = res.result));
  }

  onSubmit() {
    this.playerService.updatePlayerInfo(this.teamForm.value).subscribe();
  }
}
