import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input() leagues:any;
  @Input() teams:any;
  @Input() players:any;
  
  searchInput:any=""; 
  players_coincidences:any = [];
  teams_coincidences:any =[];

  playersDataIsReady = false;
  teamsDataIsReady= false;
  leaguesDataIsReady = false;
  
  showResults:boolean=false; 




  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges){
    for (const propName in changes){
      if (changes.hasOwnProperty(propName)){
        switch(propName){
          case 'players':{
            if (this.players.length){
              this.playersDataIsReady=true;
            }
            break;
          }
          
          case 'teams':{
            if (this.teams.length){
              this.teamsDataIsReady=true;
            }
            break;
          }

          case 'leagues':{
            if (this.leagues.length){
              this.leaguesDataIsReady=true;
            }
          }

        }
      }
    }
  }

  ngOnInit(): void {
  }


  
  onKey(){
    if(this.searchInput.length >= 3){
      //Searching for teams
      if (this.teamsDataIsReady){
        this.teams_coincidences = this.teams.filter((item:any)=> item['Nombre del equipo'].toLowerCase().includes(this.searchInput.toLowerCase()));
      }

      //Searching for players
      if (this.playersDataIsReady){
        this.players_coincidences = this.players.filter((item:any)=> item['Nombre del Jugador'].toLowerCase().includes(this.searchInput.toLowerCase()));
      }
    }else{
      this.teams_coincidences = [];
      this.players_coincidences = [];
    }
  }

  getLeague(leagueId:any):string{
    if (this.leaguesDataIsReady){
      let league = this.leagues.find((item:any)=> item['Identificador'] === leagueId);
      if (league != undefined){
        return league['Nombre De La Liga'];
      }
    }
    return 'Sin información';
    
  }

  getTeamName(teamId:string):string{
    let team = this.teams.find((item:any)=> item['id'] === teamId);
    if (team != undefined){
      return team['Nombre del equipo'];
    }else{
      return 'Sin equipo';
    }
  }

  showResultsContainer(){
    this.showResults=true;
  }
  hideResultsContainer(){
    this.showResults=false;

  }

}
