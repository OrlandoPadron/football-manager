import { GlobalConstants } from './common/global-constants';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getLeagues(){
    return this.http.get(GlobalConstants.apiURL + 'leagues');
  }

  getTeams(){
    return this.http.get(GlobalConstants.apiURL + 'teams');
  }
  
  getTeamGivenId(id_team:string){
    let params = new HttpParams().set("id", id_team);
    return this.http.get(GlobalConstants.apiURL+'teams', {params: params});

  }

  getTeamPlayers(id_team:string){
    let params= new HttpParams().set("teamId", id_team);
    return this.http.get(GlobalConstants.apiURL+'players', {params: params});
  }

}
