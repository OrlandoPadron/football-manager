import { AddNewPlayerModalComponent } from './../add-new-player-modal/add-new-player-modal.component';
import { AddNewTeamModalComponent } from './../add-new-team-modal/add-new-team-modal.component';
import { HttpService } from './../http.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  leagues:any = []; 
  teams:any = [];
  players:any = []; 

  public leagueClicked:any; 
  @ViewChild(AddNewTeamModalComponent) addTeamModal!: AddNewTeamModalComponent;
  @ViewChild(AddNewPlayerModalComponent) addPlayerModal!: AddNewPlayerModalComponent;

  constructor(private _http:HttpService) { }

  ngOnInit(): void {

    //Loading leagues
    this._http.getLeagues().subscribe(data=>{
      this.leagues=data;
    });

    //Loading teams
    this._http.getTeams().subscribe(data=>{
      this.teams = data; 
    });

    //Loading players
    this._http.getPlayers().subscribe(data=>{
      this.players = data; 
    });
  }

  childLeagueClicked(league:any){
    this.leagueClicked = league;
  }

  childNewTeamEventClicked(type:any){
    switch (type){
      case 'newTeam':{
        this.addTeamModal.visible=true;
        break;
      }
      case 'newPlayer':{
        this.addPlayerModal.visible=true;
      }
    }
  }

}
