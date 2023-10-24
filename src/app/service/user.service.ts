import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='http://localhost:4000/api';

  constructor(private http:HttpClient) { }
  signUpUser(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/user/signup`,data);
  }
  signInUser(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/user/signin`,data);
  }
}
