import { HttpService } from '../../services/http-service/http.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-details-modal',
  templateUrl: './player-details-modal.component.html',
  styleUrls: ['./player-details-modal.component.scss']
})
export class PlayerDetailsModalComponent implements OnInit, OnChanges {

  @Input() player:any;
  @Input() team:any;
  
  teams:any =[];
  visible:boolean = false; 


  
  editForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpService) { 
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      teamId: ['', Validators.required],
      id: [''],
      avatar: ['']
    });
  }



  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges){
    for (const propName in changes){
      if (changes.hasOwnProperty(propName)){
        switch(propName){          
          case 'player':{
            if (this.player.length){
              //Getting all teams 
              this._http.getTeams().subscribe(data=>{
                this.teams = data; 
                this.setForm();
              });

            }
            break;
          }
        }
      }
    }
  }

  onSubmit(_data:any){
    this._http.editPlayer(_data).subscribe(()=>{
      window.location.reload();
    });
    
  }

 //Setting form structure. 
 setForm(){
  this.editForm = this.formBuilder.group({
    name: [this.player[0]['Nombre del Jugador'], Validators.required],
    teamId: ['' , Validators.required],
    id: [this.player[0]['id']],
    avatar: [this.player[0]['Avatar']]
  });

  //Default form's select value is the players's current team. 
  this.editForm.controls['teamId'].setValue(this.team[0]['id'], {onlySelf:true})
  }

  //OnChange select event 
  changeTeam(team:any){
    this.editForm.controls['teamId'].setValue(team[0]['id']);
  }

  toggleModal(){
    this.visible = !this.visible;
  }

}
