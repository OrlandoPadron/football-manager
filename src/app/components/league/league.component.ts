import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LeagueComponent implements OnInit {

  @Input() leagues:any;
  elementActiveId:string="";

  @Output() eventChangeActiveLeague = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }
  isLeagueElementActive(leagueId:string):boolean{
    if (this.elementActiveId.length){
      if(this.elementActiveId == leagueId){
        return true; 
      }else{
        return false; 
      }

    }else{
      return false;
      
    }
  }

  changeLeagueElementActivity(league:any){
    if (this.elementActiveId != league['Identificador'] ){
      this.elementActiveId = league['Identificador'];
      //Sending event to sibling 'team'
      this.eventChangeActiveLeague.emit(league);
    }else{
      this.elementActiveId = "";
      //Sending event to sibling 'team'
      this.eventChangeActiveLeague.emit("");

    }


  }

}
