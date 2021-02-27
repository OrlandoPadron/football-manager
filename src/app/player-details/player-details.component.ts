import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  playerId: string = "";
  player: any = {};
  player_team: any = {}; 
  placeholderInfo: Array<any> = [{
    "birthday" : "",
    "country": "",
    "position": ""
  }]; 
  content_ready: boolean = false; 


  constructor(private route:ActivatedRoute, private _http:HttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['playerId'];

      //Getting player info
      this._http.getPlayerById(this.playerId).subscribe(data=>{
        this.player = data; 
        //Getting player team
        this._http.getTeamGivenId(this.player[0]['teamId']).subscribe(data=>{
          this.player_team = data; 
          this.content_ready = true; 
        });
      });

    })

    //Setting random info for placeholders. 
    this.infoPlaceHolder(); 

  }

  private infoPlaceHolder(){
    let birthday:Array<any>=["1 de abril de 1997", "11 de agosto de 1998",
    "25 de mayo de 2000", "29 de agosto de 1992"];

    let country:Array<any>=["Argentina", "España", "Alemania", "Francia"];

    let position:Array<any>=["Portero", "Defensa", "Centrocampista", "Delantero"];

    this.placeholderInfo[0]["birthday"]=birthday[Math.floor(Math.random() * birthday.length)];
    this.placeholderInfo[0]["country"]=country[Math.floor(Math.random() * country.length)];
    this.placeholderInfo[0]["position"]=position[Math.floor(Math.random() * position.length)];
  
  }


}
