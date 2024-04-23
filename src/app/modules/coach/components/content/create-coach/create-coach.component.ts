import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TeamService } from "src/app/modules/teams/team.service";
import { CoachService } from "../../../coach.service";
interface Country {
    value: string;
    name: string;
}
@Component({
    selector: "app-create-coach",
    templateUrl: "./create-coach.component.html",
    styleUrls: ["./create-coach.component.scss"],
})
export class CreateCoachComponent {
    coachForm: FormGroup;
    sponsors: any;
    teams: any;

    countries: Country[] = [
        { name: "Anh", value: "english" },
        { name: "Đức", value: "germany" },
        { name: "Italy", value: "italy" },
        { name: "Việt Nam", value: "vietnam" },
        { name: "Nhật", value: "japan" },
        // Thêm các quốc gia khác nếu cần
    ];
    constructor(
        private formBuilder: FormBuilder,
        private coachService: CoachService,
        private teamService: TeamService
    ) {}
    ngOnInit(): void {
        this.coachForm = this.formBuilder.group({
            coachName: ["", Validators.required],
            country: ["", Validators.required],
            dateOfBirth: ["", Validators.required],
        });
        this.teamService.getTeam().subscribe((teams: any) => {
            this.teams = teams.result;
        });
    }

    onSubmit() {
        this.coachService.createCoach(this.coachForm.value).subscribe();
    }
}
