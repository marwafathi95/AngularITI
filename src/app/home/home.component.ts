import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 istrue:boolean=false;
 comparetext():void{
 this.istrue=!this.istrue;
 }
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
