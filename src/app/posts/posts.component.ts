import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   
  constructor(private postservice:PostsService) { }
  posts:any[]=[];
  ngOnInit(): void {
    this.postservice.getposts().subscribe(data=>
     {
      this.posts=data;
     });
  }

}
