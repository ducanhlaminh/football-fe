import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from 'src/app/shared/layout/page/layout-admin/layout-admin.component';
import { CreatePlayerComponent } from './components/content/create-player/create-player.component';
import { ListPlayerComponent } from './components/content/list-player/list-player.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'players-list', component: ListPlayerComponent },
      { path: 'players-create', component: CreatePlayerComponent },
      // { path: 'teams-list', component: ListTeamComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
