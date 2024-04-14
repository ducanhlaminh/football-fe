import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from 'src/app/shared/layout/page/layout-admin/layout-admin.component';
import { CreateSponsorComponent } from './components/content/create-sponsor/create-sponsor.component';
import { ListSponsorComponent } from './components/content/list-sponsor/list-sponsor.component';
import { SponsorShipComponent } from './components/content/sponsor-ship/sponsor-ship.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: 'sponsors-list', component: ListSponsorComponent },
      { path: 'sponsors-create', component: CreateSponsorComponent },
      { path: 'sponsorShip-list', component: SponsorShipComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorRoutingModule {}
