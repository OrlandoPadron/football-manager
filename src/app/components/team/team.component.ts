import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() teams: any;
  @Input() leagueClicked:any="";
  leagueTeams:any = [];
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges){
    for (const propName in changes){
      if (changes.hasOwnProperty(propName)){
        switch(propName){
          case 'leagueClicked':{
            if (this.leagueClicked){
              this.getTeamsOfTheLeague();
            }else{
              this.leagueTeams=[];
            }
            break;
          }
        }
      }
    }
  }

  getTeamsOfTheLeague(){
    this.leagueTeams = this.teams.filter((item:any)=> item['Liga']== this.leagueClicked['Identificador']);
  }
}
