import { Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-add-new-team-modal',
  templateUrl: './add-new-team-modal.component.html',
  styleUrls: ['./add-new-team-modal.component.scss']
})
export class AddNewTeamModalComponent implements OnInit, OnChanges {
  @Input() leagues:any=[];
  visible:boolean = false; 
  addForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpService) { 
    this.addForm = this.formBuilder.group({
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
          case 'leagues':{
            if (this.leagues.length){
              this.setForm();
            }
            break;
          }
        }
      }
    }
  }

  //Setting form structure. 
  setForm(){
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      leagueId: ['' , Validators.required],
      avatar: ['assets/placeholders/team-default.png'],
      id: ['']
    });
  }

  closeModal(){
    this.visible = false;
  }

  onSubmit(_data:any){
    this._http.newTeam(_data).subscribe(
      () => {
       window.location.reload();
      }
    );

    
  }
    //OnChange select event 
    changeLeague(league:any){
      this.addForm.controls['leagueId'].setValue(league[0]['Identificador']);
    }
}
