import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CoachModule } from 'src/app/modules/coach/coach.module';
import { CoachService } from 'src/app/modules/coach/coach.service';
import { TeamService } from '../../../team.service';
import { DialogUpdateTeamComponent } from '../../dialog/dialog-update-team/dialog-update-team.component';
interface Country {
  value: string;
  name: string;
}
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent {
  teamForm: FormGroup;
  coaches: any;
  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private coachService: CoachService
  ) {}
  countries: Country[] = [
    { name: 'Anh', value: 'brazil' },
    { name: 'Đức', value: 'germany' },
    { name: 'Italy', value: 'argentina' },
    { name: 'Việt Nam', value: 'italy' },
    { name: 'Nhật', value: 'france' },
    // Thêm các quốc gia khác nếu cần
  ];
  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      country: ['', Validators.required],
      teamName: ['', Validators.required],
      coachId: ['', Validators.required],
    });
    this.coachService
      .getMatch()
      .subscribe((coaches: any) => (this.coaches = coaches.result));
  }

  onSubmit() {
    this.teamService.createTeam(this.teamForm.value).subscribe();
  }
}
