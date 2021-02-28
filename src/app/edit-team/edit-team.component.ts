import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  visible:boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    console.log("estamos");
    this.visible = !this.visible;
    console.log(this.visible);
  }
}
