import { Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit, OnChanges {
  
  @Input() team:any;
  leagues:any = []; 
  league:any; 
  visible:boolean = false; 
  editForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpService) { 
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      leagueId: ['', Validators.required],
      avatar: [''],
      id: ['']
    });
  }

  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges){
    for (const propName in changes){
      if (changes.hasOwnProperty(propName)){
        switch(propName){          
          case 'team':{
            if (this.team.length){
              //Getting all leagues 
              this._http.getLeagues().subscribe(data=>{
                this.leagues = data; 
                this.getTeamLeague();
              });

            }
            break;
          }
        }
      }
    }
  }
  
  //Getting team's league
  getTeamLeague(){
    this.league = this.leagues.filter((item:any)=> item['Identificador'] == this.team[0]['Liga']);
    this.setForm();
  }

  //Setting form structure. 
  setForm(){
    this.editForm = this.formBuilder.group({
      name: [this.team[0]['Nombre del equipo'], Validators.required],
      leagueId: ['' , Validators.required],
      avatar: [this.team[0]['Logo del Equipo']],
      id: [this.team[0]['id']]
    });

    //Default form's select value is the team's current league. 
    this.editForm.controls['leagueId'].setValue(this.league[0]['Identificador'], {onlySelf:true})
  }

  toggleModal(){
    this.visible = !this.visible;
  }

  onSubmit(_data:any){
    console.log(_data.value);
    this._http.editTeam(_data);
    this._http.editTeam(_data).subscribe(
      data => {
       console.log(data);
       window.location.reload();
      }
    );

    
  }

  //OnChange select event 
  changeLeague(league:any){
    this.editForm.controls['leagueId'].setValue(league[0]['Identificador']);
  }
}
