import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from 'src/app/shared/layout/page/layout-admin/layout-admin.component';
import { CreateCoachComponent } from './components/content/create-coach/create-coach.component';
import { ListCoachComponent } from './components/content/list-coach/list-coach.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'coach-list', component: ListCoachComponent },
      { path: 'coach-create', component: CreateCoachComponent },
      // { path: 'teams-list', component: ListTeamComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachRoutingModule {}
