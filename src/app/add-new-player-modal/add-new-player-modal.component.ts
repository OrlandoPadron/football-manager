import { Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-add-new-player-modal',
  templateUrl: './add-new-player-modal.component.html',
  styleUrls: ['./add-new-player-modal.component.scss']
})
export class AddNewPlayerModalComponent implements OnInit {

  @Input() teams:any=[];
  visible:boolean = false; 
  addPlayerForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpService) { 
    this.addPlayerForm = this.formBuilder.group({
      name: ['', Validators.required],
      teamId: ['', Validators.required],
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
          case 'teams':{
            if (this.teams.length){
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
    this.addPlayerForm = this.formBuilder.group({
      name: ['', Validators.required],
      teamId: ['' , Validators.required],
      avatar: ['assets/placeholders/player-default.png'],
      id: ['']
    });
  }

  closeModal(){
    this.visible = false;
  }

  onSubmit(_data:any){
    this._http.newPlayer(_data).subscribe(
      () => {
       window.location.reload();
      }
    );

    
  }
    //OnChange select event 
    changeTeam(team:any){
      this.addPlayerForm.controls['teamId'].setValue(team[0]['id']);
    }

}
