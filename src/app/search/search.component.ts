import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input() teams:any;
  @Input() players:any;
  
  searchInput:any=""; 
  players_coincidences:any = [];
  teams_coincidences:any =[];

  playersDataIsReady = false;
  teamsDataIsReady= false;
  
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

  showResultsContainer(){
    this.showResults=true;
  }
  hideResultsContainer(){
    this.showResults=false;

  }

}
