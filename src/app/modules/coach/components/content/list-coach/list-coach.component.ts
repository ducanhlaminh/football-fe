import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatchService } from 'src/app/modules/match/match.service';
import { CoachService } from '../../../coach.service';
interface Country {
  value: string;
  name: string;
}
@Component({
  selector: 'app-list-coach',
  templateUrl: './list-coach.component.html',
  styleUrls: ['./list-coach.component.scss'],
})
export class ListCoachComponent {
  formFilter!: FormGroup;
  formEdit!: FormGroup;
  coloumnForm!: FormGroup;
  coaches: any;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  formGroup: FormGroup;
  tournaments: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrCommonService,
    public dialog: MatDialog,
    private CoachService: CoachService
  ) {}
  countries: Country[] = [
    { name: 'Anh', value: 'england' },
    { name: 'Đức', value: 'germany' },
    { name: 'Italy', value: 'italy' },
    { name: 'Việt Nam', value: 'vietnam' },
    { name: 'Nhật', value: 'japan' },
    // Thêm các quốc gia khác nếu cần
  ];
  ngOnInit(): void {
    this.CoachService.getMatch().subscribe((res: any) => {
      this.coaches = res.result;
    });
    this.formGroup = this.formBuilder.group({
      coachName: [''], // initial value for country select
      country: [''],
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
    this.CoachService.getMatch(this.formGroup.value).subscribe((res: any) => {
      this.coaches = res.result;
    });
    // // Handle form submission here
  }
  onDelete(id: number) {
    this.CoachService.deleteCoach(id).subscribe();
  }
}
