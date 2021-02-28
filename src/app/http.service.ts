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
  
  getLeagueGivenId(id_league:string){
    let params = new HttpParams().set("Identificador", id_league);
    return this.http.get(GlobalConstants.apiURL+'leagues', {params: params});

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

  getPlayers(){
    return this.http.get(GlobalConstants.apiURL + 'players');
  }

  getPlayerById(id_player:string){
    let params= new HttpParams().set("id", id_player);
    return this.http.get(GlobalConstants.apiURL+'players', {params: params});
  }

  //Put method
  editPlayer(_data:any){
    console.log(_data.value.id);
    const body = { 
      "Nombre del Jugador": _data.value.name,
      "id": "ca85cfed-69d8-4e03-9259-960195bde933",
      "Avatar": "https://robohash.org/etconsequunturreprehenderit.png?size=250x250&set=set1",
      "teamId": "8154f4cb-246b-4bf9-bc64-51f8661b6781"
    };

    let url = GlobalConstants.apiURL + 'players/' + _data.value.id; 
    console.log(url);
    this.http.put(GlobalConstants.apiURL+'players/'+_data.value.id, body).subscribe(data => console.log(data));
  }

  // Team's put method
  editTeam(_data:any){
    const body = { 
      "Nombre del equipo": _data.value.name,
      "id": _data.value.id,
      "Logo del Equipo": _data.value.avatar,
      "Liga": _data.value.leagueId
    };
    return this.http.put(GlobalConstants.apiURL+'teams/'+_data.value.id, body);
  }

  //Team's delete method
  deleteTeam(teamId:any){    
    return this.http.delete(GlobalConstants.apiURL+'teams/'+teamId);
  }
}
