import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 
  errorMessage:string="";

  constructor(private usersService:UsersService) { }
  users:any[]=[];
  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(data=>
      {
        this.users=data;
      },error=>
      {
        this.errorMessage=error;
      });
      
  }

}
