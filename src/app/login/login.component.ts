import { Component, OnInit } from '@angular/core';
import { users } from 'app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  user:users=new users("","","","","",true)
  ngOnInit(): void {
  }

}
