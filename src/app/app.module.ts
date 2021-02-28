import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LeagueComponent } from './league/league.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerDetailsModalComponent } from './player-details-modal/player-details-modal.component';
import { ClickOutsideDirectiveDirective } from './directives/click-outside-directive.directive';
import { AddButtonComponent } from './add-button/add-button.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LeagueComponent,
    PlayerComponent,
    TeamComponent,
    HomeComponent,
    TeamDetailsComponent,
    PlayerDetailsComponent,
    PlayerDetailsModalComponent,
    ClickOutsideDirectiveDirective,
    AddButtonComponent,
    EditTeamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
