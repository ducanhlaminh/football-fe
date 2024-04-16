import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrCommonService } from "src/app/shared/service/toastr.service";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: "app-sign-up-sponsor",
    templateUrl: "./sign-up-sponsor.component.html",
    styleUrls: ["./sign-up-sponsor.component.scss"],
})
export class SignUpSponsorComponent {
    formAccount!: FormGroup;
    showPassword: boolean = false;
    passwordType = "password";
    loading: boolean = false;
    constructor(
        private FormBuilder: FormBuilder,
        private ToastrCommonService: ToastrCommonService,
        private Router: Router,
        private AuthService: AuthService
    ) {}
    ngOnInit(): void {
        this.formAccount = this.FormBuilder.group({
            username: ["", Validators.required],
            sponsorName: ["", Validators.required],
            sponsorType: ["", Validators.required],
            country: ["", Validators.required],
            password: ["", Validators.required],
            rePassword: ["", Validators.required],
        });
    }
    login() {
        if (
            this.formAccount.value.password ===
                this.formAccount.value.rePassword &&
            this.formAccount.valid
        ) {
            this.AuthService.signUpSponsor(this.formAccount.value).subscribe(
                async (res: any) => {
                    this.Router.navigateByUrl(`login`);
                    this.ToastrCommonService.showToart(true, "Tạo thành công");
                }
            );
        } else {
            this.ToastrCommonService.showToart(false, "Mật khẩu chưa khớp");
        }
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
        if (this.showPassword) {
            this.passwordType = "text";
        } else {
            this.passwordType = "password";
        }
    }
}
