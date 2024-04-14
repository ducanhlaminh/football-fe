import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorRoutingModule } from './sponsor-routing.module';
import { ListSponsorComponent } from './components/content/list-sponsor/list-sponsor.component';
import { CreateSponsorComponent } from './components/content/create-sponsor/create-sponsor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { SponsorShipComponent } from './components/content/sponsor-ship/sponsor-ship.component';

@NgModule({
  declarations: [ListSponsorComponent, CreateSponsorComponent, SponsorShipComponent],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class SponsorModule {}
