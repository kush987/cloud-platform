import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  apiUrl = 'http://localhost:4000/api/workspace'
  constructor(private http:HttpClient) { }


  createWorkspace(data: any){
    return this.http.post(`${this.apiUrl}/create`,data);
  }
}
