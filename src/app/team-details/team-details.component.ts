import { EditTeamComponent } from './../edit-team/edit-team.component';
import { HttpService } from './../http.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  @ViewChild(EditTeamComponent) editModal!:EditTeamComponent;


  constructor(private route:ActivatedRoute, private _http:HttpService, private router: Router) { }



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
        this.content_ready = true; 
      });

    });
  }

  openModal(){
    this.editModal.visible=true;
  }

  deleteTeam(teamId:any){
    let confirmation:any = confirm("¿Estás seguro de que desea eliminar el equipo " + this.team[0]['Nombre del equipo'] + "? \nLos jugadores asociados también serán eliminados.");
    if (confirmation == true){
      this._http.deleteTeam(teamId).subscribe(
        data=>{
          alert("Equipo " + this.team[0]['Nombre del equipo'] + " eliminado. \nVolviendo al menú principal.");
          this.router.navigate(['/']);
      });
    }
  }


}
