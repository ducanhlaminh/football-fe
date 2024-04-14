import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { ListMatchComponent } from './components/contents/list-match/list-match.component';
import { CreateMatchComponent } from './components/contents/create-match/create-match.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ListMatchComponent, CreateMatchComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class MatchModule {}
