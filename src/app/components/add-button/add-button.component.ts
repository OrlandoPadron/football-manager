import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Output() newAddEventClicked = new EventEmitter<any>();
  active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  toggleDropdown(){
    this.active = !this.active; 
  }

  openNewModal(type:string){
    switch(type){
      case 'newTeam':{
        this.active=false;
        this.newAddEventClicked.emit(type);
        break;
      }
      case 'newPlayer':{
        this.active=false;
        this.newAddEventClicked.emit(type);
        break;
      }
    }

  }
}
