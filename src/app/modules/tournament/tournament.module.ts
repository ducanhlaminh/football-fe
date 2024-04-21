import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TournamentRoutingModule } from './tournament-routing.module';
import { ListTournamentComponent } from './components/content/list-tournament/list-tournament.component';
import { CreateTournamentComponent } from './components/content/create-tournament/create-tournament.component';
import { UpdateTournamentComponent } from './components/content/update-tournament/update-tournament.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogUpdateTournamentComponent } from './components/dialog/dialog-update-tournament/dialog-update-tournament.component';
import { ListTournamentTeamComponent } from './components/content/list-tournament-team/list-tournament-team.component';

@NgModule({
  declarations: [
    ListTournamentComponent,
    CreateTournamentComponent,
    UpdateTournamentComponent,
    DialogUpdateTournamentComponent,
    ListTournamentTeamComponent,
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class TournamentModule {}
