import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {


  active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  toggleDropdown(){
    this.active = !this.active; 
  }
}
