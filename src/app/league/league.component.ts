import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  leagues:any=[];

  constructor(private _http:HttpService) { }

  ngOnInit(): void {
    this._http.getLeagues().subscribe(data=>{
      this.leagues=data;
      console.log(this.leagues);
    })
  }


}
