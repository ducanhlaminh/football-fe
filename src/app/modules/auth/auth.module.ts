import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/content/login/login.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { NgxLoadingModule } from 'ngx-loading';
import { SignUpComponent } from './components/content/sign-up/sign-up.component';
import { SignUpSponsorComponent } from './components/content/sign-up-sponsor/sign-up-sponsor.component';
@NgModule({
  declarations: [LoginComponent, SignUpComponent, SignUpSponsorComponent],
  imports: [CommonModule, AuthRoutingModule, LayoutModule, NgxLoadingModule],
  providers: [],
})
export class AuthModule {}
