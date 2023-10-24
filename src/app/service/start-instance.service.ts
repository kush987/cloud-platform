import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartInstanceService {

  constructor(private restAPi: HttpClient) { }

  getInstanceUp(data:any){
    return this.restAPi.post('http://127.0.0.1:3000/start-instances', data);
  }
  
}
