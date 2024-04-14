import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrCommonService } from 'src/app/shared/service/toastr.service';
import { AuthService } from '../../../services/auth.service';
interface account {
  email: string;
  password: string;
}
interface dataLoginResp {
  message: string;
  code: number;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formAccount!: FormGroup;
  showPassword: boolean = false;
  passwordType = 'password';
  loading: boolean = false;
  constructor(
    private FormBuilder: FormBuilder,
    private ToastrCommonService: ToastrCommonService,
    private AuthService: AuthService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    localStorage.clear();
    this.formAccount = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.AuthService.login(this.formAccount.value).subscribe(
      async (res: any) => {
        console.log(res);

        localStorage.setItem('token', 'Bearer ' + res.result.token);
        localStorage.setItem('role', res.result.role_enum);
        localStorage.setItem('username', res.result.username);

        setTimeout(() => {
          this.Router.navigateByUrl(`admin`);
        }, 500);

        this.ToastrCommonService.showToart(true, 'Tạo tài khoản thành công');
      }
    );
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
