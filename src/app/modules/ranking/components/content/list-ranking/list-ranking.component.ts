import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SponsorService } from 'src/app/modules/sponsor/sponsor.service';
import { TeamService } from 'src/app/modules/teams/team.service';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';

@Component({
  selector: 'app-list-ranking',
  templateUrl: './list-ranking.component.html',
  styleUrls: ['./list-ranking.component.scss'],
})
export class ListRankingComponent {
  teams: any;
  faTrash = faTrash;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrCommonService,
    private sponsorService: SponsorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sponsorService.getSponsor().subscribe((res: any) => {
      this.teams = res.result;
    });
    this.formGroup = this.formBuilder.group({
      country: [''], // initial value for country select
      teamName: [''], // initial value for teamName select
    });
  }
  openDialog(data: any) {
    // console.log(data);
    // this.dialog.open(DialogUpdateTeamComponent, {
    //   data: data,
    // });
  }
  onSubmit() {
    this.sponsorService
      .getSponsor(this.formGroup.value)
      .subscribe((res: any) => {
        this.teams = res.result;
      });
    // Handle form submission here
  }
  onDelete(id_sponsor: number, id_sponsorShip: number) {
    this.sponsorService
      .deleteSponsor(id_sponsor, id_sponsorShip)
      .subscribe((res: any) => {});
  }
}
