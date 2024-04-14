import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formAccount!: FormGroup;
  showPassword: boolean = false;
  passwordType = 'password';
  loading: boolean = false;
  constructor(
    private FormBuilder: FormBuilder,
    private ToastrCommonService: ToastrCommonService,
    private Router: Router,
    private AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.formAccount = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });
  }
  login() {
    if (this.formAccount.value.password === this.formAccount.value.rePassword) {
      this.AuthService.signUpBtv(this.formAccount.value).subscribe(
        async (res: any) => {
          if (res.code === 1000) {
            this.Router.navigateByUrl(`login`);
            this.ToastrCommonService.showToart(
              true,
              'Tạo biên tập viên thành công'
            );
          } else {
            this.ToastrCommonService.showToart(false, 'Tạo không thành công');
          }
        }
      );
    } else {
      this.ToastrCommonService.showToart(false, 'Mật khẩu chưa khớp');
    }
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}
