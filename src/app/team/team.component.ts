import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams: any = [];
  constructor(private _http:HttpService) { }

  ngOnInit(): void {
    this._http.getTeams().subscribe(data=>{
      this.teams = data; 
      console.log(this.teams);
    });
  }

}
