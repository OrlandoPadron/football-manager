import { PlayerDetailsComponent } from './player-details/player-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams/:teamId', component: TeamDetailsComponent},
  {path: 'players/:playerId', component: PlayerDetailsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
