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
    const body = { 
      "Nombre del Jugador": _data.value.name,
      "id": _data.value.id,
      "Avatar": _data.value.avatar,
      "teamId": _data.value.teamId
    };
    console.log("llegué");
    console.log(body);

    return this.http.put(GlobalConstants.apiURL+'players/'+_data.value.id, body);
  }

  //Player delete method
  deletePlayer(playerId:any){    
    return this.http.delete(GlobalConstants.apiURL+'players/'+playerId);
  }

  // Team put method
  editTeam(_data:any){
    const body = { 
      "Nombre del equipo": _data.value.name,
      "id": _data.value.id,
      "Logo del Equipo": _data.value.avatar,
      "Liga": _data.value.leagueId
    };
    return this.http.put(GlobalConstants.apiURL+'teams/'+_data.value.id, body);
  }

  //Team delete method
  deleteTeam(teamId:any){    
    return this.http.delete(GlobalConstants.apiURL+'teams/'+teamId);
  }
}
