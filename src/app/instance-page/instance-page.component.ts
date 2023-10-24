import { Component } from '@angular/core';
import { InstanceService } from '../service/instance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instance-page',
  templateUrl: './instance-page.component.html',
  styleUrls: ['./instance-page.component.css']
})
export class InstancePageComponent {

  
  constructor(private apiCall:InstanceService){}
  user_id: any;
  tabledata:any;
  ngOnInit(){
    this.user_id=localStorage.getItem('User_id')
    this.getAllData();
  }
  getAllData(){
    this.apiCall.getAllInstance(this.user_id).subscribe({
      next: (data:any)=>{
        this.tabledata = data.data.map((item: any) => {
          item.ip_addresss = item.ip_addresss.replace('0.0.0.0', 'http://localhost');
          return item;
        });
      }
    ,error: (error:any)=>{
      console.log(error,"error")
    }})
  }

  startContainer(item:any){
    let data = {
      container_id:item.container_id.container_id
    }
    this.apiCall.startInstance(data,this.user_id).subscribe({next: (data:any)=>{
      Swal.fire('Good job', 'Your instance has been started', 'success')
    },error:(error:any) =>{
      Swal.fire('Error', 'Your instance was not able started', 'error')
    }})
    this.getAllData();
  }

  stopContainer(item:any){
    let data = {
      container_id:item.container_id.container_id
    }
    this.apiCall.stopInstance(data,this.user_id).subscribe({next: (data:any)=>{
      Swal.fire('Good job', 'Your instance has been stoped', 'success')
    },error:(error:any) =>{
      Swal.fire('Error', 'Your instance was not able stoped', 'error')
    }})
    this.getAllData();
  }

  deleteContainer(item:any){
    let data = {
      container_id:item.container_id.container_id
    }
    this.apiCall.deleteInstance(data).subscribe({next: (data:any)=>{
      Swal.fire('Good job', 'Your instance has been deleted', 'success')
    },error:(error:any) =>{
      Swal.fire('Error', 'Your instance was not able deleted', 'error')
    }})
    this.getAllData();
  }

  stringChanges(item: string){
    console.log(item)
  }




}
