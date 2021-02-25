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

  }


}
