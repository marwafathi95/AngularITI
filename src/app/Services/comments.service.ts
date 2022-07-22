import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }
  url:string=' https://jsonplaceholder.typicode.com/posts/1/comments';
  getcomments():Observable<any[]>
  {
    return this.http.get<any[]>(this.url).pipe(catchError((err=>{
      return throwError(()=>err.message||"Error")
    })))
  }
}
