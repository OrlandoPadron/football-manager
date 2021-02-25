import { TeamDetailsComponent } from './team-details/team-details.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams/:teamId', component: TeamDetailsComponent},
  {path: 'players/:playerId', component: PlayerComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
