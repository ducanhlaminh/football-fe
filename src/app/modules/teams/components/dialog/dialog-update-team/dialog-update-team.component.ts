import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from '../../../team.service';

@Component({
  selector: 'app-dialog-update-team',
  templateUrl: './dialog-update-team.component.html',
  styleUrls: ['./dialog-update-team.component.scss'],
})
export class DialogUpdateTeamComponent {
  teamForm: FormGroup;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public dataInject: any
  ) {
    console.log(dataInject);

    this.data = dataInject;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.teamForm = this.formBuilder.group({
      country: [this.dataInject.country, Validators.required],
      teamName: [this.dataInject.teamName, Validators.required],
      teamId: [this.dataInject.teamId],
    });
  }

  onSubmit() {
    this.teamService.updateTeamInfo(this.teamForm.value).subscribe();
  }
}
