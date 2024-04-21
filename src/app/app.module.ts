import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { HttpInterceptorInterceptor } from './intercepter/http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { ToastrComponent } from './shared/components/toastr/toastr.component';
import { TeamsModule } from './modules/teams/teams.module';
import { PlayerModule } from './modules/player/player.module';
import { TournamentModule } from './modules/tournament/tournament.module';
import { SponsorModule } from './modules/sponsor/sponsor.module';
import { MatchModule } from './modules/match/match.module';
import { CoachModule } from './modules/coach/coach.module';
import { RankingModule } from './modules/ranking/ranking.module';
@NgModule({
  declarations: [AppComponent, ToastrComponent],
  imports: [
    PlayerModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    SponsorModule,
    AuthModule,
    TeamsModule,
    TournamentModule,
    MatchModule,
    CoachModule,
    RankingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    }),
    BrowserAnimationsModule, // required animations module
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
