import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { LeagueComponent } from './components/league/league.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { PlayerDetailsModalComponent } from './components/player-details-modal/player-details-modal.component';
import { ClickOutsideDirectiveDirective } from './directives/click-outside-directive.directive';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AddNewTeamModalComponent } from './components/add-new-team-modal/add-new-team-modal.component';
import { AddNewPlayerModalComponent } from './components/add-new-player-modal/add-new-player-modal.component';

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
    AddNewTeamModalComponent,
    AddNewPlayerModalComponent,

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
