import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from 'src/app/shared/layout/page/layout-admin/layout-admin.component';
import { CreateTeamComponent } from './components/content/create-team/create-team.component';
import { ListTeamComponent } from './components/content/list-team/list-team.component';
import { SignupTournamentComponent } from './components/content/signup-tournament/signup-tournament.component';
import { TeamUpdateComponent } from './components/content/team-update/team-update.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'teams-list', component: ListTeamComponent },
      { path: 'teams-create', component: CreateTeamComponent },
      { path: 'teams-update', component: TeamUpdateComponent },
      { path: 'team-signup-tournament', component: SignupTournamentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
