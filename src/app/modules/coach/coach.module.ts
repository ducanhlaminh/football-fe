import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { ListCoachComponent } from './components/content/list-coach/list-coach.component';
import { CreateCoachComponent } from './components/content/create-coach/create-coach.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ListCoachComponent, CreateCoachComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class CoachModule {}
