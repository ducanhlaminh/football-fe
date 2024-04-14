import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamsRoutingModule } from './teams-routing.module';
import { ListTeamComponent } from './components/content/list-team/list-team.component';
import { CreateTeamComponent } from './components/content/create-team/create-team.component';
import { TeamUpdateComponent } from './components/content/team-update/team-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogUpdateTeamComponent } from './components/dialog/dialog-update-team/dialog-update-team.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupTournamentComponent } from './components/content/signup-tournament/signup-tournament.component';

@NgModule({
  declarations: [
    ListTeamComponent,
    CreateTeamComponent,
    TeamUpdateComponent,
    DialogUpdateTeamComponent,
    SignupTournamentComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class TeamsModule {}
