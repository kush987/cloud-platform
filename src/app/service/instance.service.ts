import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstanceService {
  apiUrl = 'http://localhost:4000/api/instance'
  
  constructor(private http:HttpClient) { }


  createInstance(data:any): Observable<any>{
    
    return this.http.post<any>(`${this.apiUrl}/create-instance`,data);
  }
  startInstance(data:any,param:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/start-instance/${param}`,data);
  }
  
  stopInstance(data:any,param:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/stop-instance/${param}`,data);
  }

  deleteInstance(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/remove-instance`,data);
  }
  getAllInstance(params:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/get-instances/${params}`);
  }
}
