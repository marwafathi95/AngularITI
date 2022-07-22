import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
//Here we define the property to be bind
  imagePath:string="assets/images/img.png";
  ngOnInit(): void {
  }
 
}
