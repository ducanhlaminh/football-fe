import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/modules/teams/team.service';
import { SponsorService } from '../../../sponsor.service';
@Component({
  selector: 'app-create-sponsor',
  templateUrl: './create-sponsor.component.html',
  styleUrls: ['./create-sponsor.component.scss'],
})
export class CreateSponsorComponent {
  sponsorForm: FormGroup;
  sponsors: any;
  teams: any;
  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private sponsorService: SponsorService
  ) {}
  ngOnInit(): void {
    this.sponsorForm = this.formBuilder.group({
      sponsorId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      sponsorshipAmount: [0, Validators.required],
      teamId: ['', Validators.required],
    });
    this.sponsorService
      .getSponsor()
      .subscribe((res: any) => (this.sponsors = res.result));
    this.teamService
      .getTeam()
      .subscribe((res: any) => (this.teams = res.result));
  }

  onSubmit() {
    this.sponsorService.createSponsor(this.sponsorForm.value).subscribe();
  }
}
