import { Component, Inject } from '@angular/core';
import { SystemOptionComponent } from '../system-option/system-option.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnimateTimings } from '@angular/animations';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { InstanceService } from '../service/instance.service';
import { WorkspaceService } from '../service/workspace.service';

export interface instanceObject{
  user_id:string,
  appName:string,
  projectId:string,
  instance:string,
  username:string
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  constructor(
    public dialogRef: MatDialogRef<SystemOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private instanceCall: InstanceService,
    private workSpaceAPI: WorkspaceService,
  ) {
  }
  token:any;
  user_id:any;
  username:any;
  dropdownOption:any;
  selectedOption: any;
  appName: any;
  ngOnInit(){
   this.token = localStorage.getItem('Token') 
   this.user_id = localStorage.getItem('User_id') ?? '';
   this.username = localStorage.getItem('Username');
   this.selectOption();
  }
  showSelectedOption() {
    if (this.selectedOption) {
      console.log('Selected option:', this.selectedOption);
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  selectOption(){
    
    this.workSpaceAPI.getWorkSpace(this.user_id).subscribe({next: (res:any)=>{
      this.dropdownOption = res.data;
    },error: (err:any)=>{
      console.log(err);
    }})
  }
  createInstance(){
    this.onNoClick()
    const instanceData: instanceObject = {
      user_id: this.user_id,
      appName: this.appName,
      projectId: this.selectedOption,
      instance:this.data.title.toLowerCase(),
      username: this.username + this.user_id + '-' + this.generateRandomString(6)
    }
    this.instanceCall.createInstance(instanceData).subscribe({next: (data:any)=>{
      if(data.message === "please select your project workspace"){
        Swal.fire({title:`${data.message}` , icon:'warning'})
      }else{
        Swal.fire({title:'Good Job',text:'your instace has been created',icon:'success'})
      }
    }, error:(error:any)=>{
      Swal.fire({title:'Warning!', text:`${error.error}`, icon:'warning'})
    }})
  }
}
