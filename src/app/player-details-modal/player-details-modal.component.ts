import { HttpService } from './../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-details-modal',
  templateUrl: './player-details-modal.component.html',
  styleUrls: ['./player-details-modal.component.scss']
})
export class PlayerDetailsModalComponent implements OnInit {

  @Input() player:any;
  @Input() team:any;

  
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpService) { 
    this.form = formBuilder.group({}); 
  }



  ngOnInit(): void {

    console.log(this.player);
    this.form = this.formBuilder.group({
      name: [this.player[0]['Nombre del Jugador'], Validators.required],
      team: [this.team[0]['Nombre del equipo'], Validators.required],
      id: [this.player[0]['id']],
      avatar: [""]
    });

  }

  onSubmit(_datos:any){
    console.log(_datos.value);
    this._http.editPlayer(_datos);
    
  }

}
