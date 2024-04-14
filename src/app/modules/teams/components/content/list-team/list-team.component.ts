import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { TeamService } from '../../../team.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateTeamComponent } from '../../dialog/dialog-update-team/dialog-update-team.component';
interface Country {
  value: string;
  name: string;
}

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.scss'],
})
export class ListTeamComponent {
  formFilter!: FormGroup;
  formEdit!: FormGroup;
  coloumnForm!: FormGroup;
  teams: any;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrCommonService,
    private teamService: TeamService,
    public dialog: MatDialog
  ) {}

  countries: Country[] = [
    { name: 'Anh', value: 'brazil' },
    { name: 'Đức', value: 'germany' },
    { name: 'Italy', value: 'italy' },
    { name: 'Việt Nam', value: 'vietnam' },
    { name: 'Nhật', value: 'japan' },
    // Thêm các quốc gia khác nếu cần
  ];
  ngOnInit(): void {
    this.teamService.getTeam().subscribe((res: any) => {
      this.teams = res.result;
    });
    this.formGroup = this.formBuilder.group({
      country: [''], // initial value for country select
      teamName: [''], // initial value for teamName select
    });
  }
  openDialog(data: any) {
    console.log(data);

    this.dialog.open(DialogUpdateTeamComponent, {
      data: data,
    });
  }
  onSubmit() {
    this.teamService.getTeam(this.formGroup.value).subscribe((res: any) => {
      this.teams = res.result;
    });
    // Handle form submission here
  }
  onDelete(id: number) {
    this.teamService.deleteTeam(id).subscribe((res: any) => {});
  }
}
