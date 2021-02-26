import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  leagues:any = []; 
  teams:any = [];
  players:any = []; 

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

}
