import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  url:string="https://jsonplaceholder.typicode.com/users";
  getAllUsers():Observable<any[]>
  {
    return this.httpClient.get<any[]>(this.url).pipe(
      catchError((err)=>{
        return throwError(()=>err.message||"Internal server error")
      }))
  }
}
