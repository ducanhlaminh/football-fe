import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/content/login/login.component';
import { SignUpSponsorComponent } from './components/content/sign-up-sponsor/sign-up-sponsor.component';
import { SignUpComponent } from './components/content/sign-up/sign-up.component';
const routes: Routes = [
  {
    path: 'sign-up-btv',
    component: SignUpComponent,
  },
  {
    path: 'sign-up-sponsor',
    component: SignUpSponsorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
