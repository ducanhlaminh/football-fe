import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutingModule } from './player-routing.module';
import { CreatePlayerComponent } from './components/content/create-player/create-player.component';
import { UpdatePlayerComponent } from './components/content/update-player/update-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPlayerComponent } from './components/content/list-player/list-player.component';
import { DialogUpdatePlayerComponent } from './components/dialog/dialog-update-player/dialog-update-player.component';

@NgModule({
  declarations: [
    ListPlayerComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent,
    DialogUpdatePlayerComponent,
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class PlayerModule {}
