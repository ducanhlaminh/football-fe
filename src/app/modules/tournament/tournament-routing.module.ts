import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from 'src/app/shared/layout/page/layout-admin/layout-admin.component';
import { CreateTournamentComponent } from './components/content/create-tournament/create-tournament.component';
import { ListTournamentComponent } from './components/content/list-tournament/list-tournament.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'tournament-list', component: ListTournamentComponent },
      { path: 'tournament-create', component: CreateTournamentComponent },
      // { path: 'teams-list', component: ListTeamComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
