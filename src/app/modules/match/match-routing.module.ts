import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from 'src/app/shared/layout/page/layout-admin/layout-admin.component';
import { CreateMatchComponent } from './components/contents/create-match/create-match.component';
import { ListMatchComponent } from './components/contents/list-match/list-match.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'match-list', component: ListMatchComponent },
      { path: 'match-create', component: CreateMatchComponent },
      // { path: 'teams-list', component: ListTeamComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchRoutingModule {}
