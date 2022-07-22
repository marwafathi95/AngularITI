import { Component, OnInit } from '@angular/core';
import { users } from 'app/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }
  topics:any[]=["Facebook","twitter","google"]
  user:users=new users("marwa","12345","emf@gmail","01012323456","js",true)

  ngOnInit(): void {
  }

}
