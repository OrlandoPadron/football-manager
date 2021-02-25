import { HttpService } from './../http.service';
import { Team } from './../interfaces/team';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  teamId: string = ""; 
  team: any = {}; 
  players: any = {}; 
  content_ready: boolean = false; 

  constructor(private route:ActivatedRoute, private _http:HttpService) { }



  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.teamId = params['teamId']; 
      
      //Getting team
      this._http.getTeamGivenId(this.teamId).subscribe(data=>{
        this.team = data; 
      });

      //Getting team players 
      this._http.getTeamPlayers(this.teamId).subscribe(data=>{
        this.players = data; 
        console.log(this.players);
        this.content_ready = true; 
      });

    });
  }



}
