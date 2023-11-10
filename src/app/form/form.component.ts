import { Component, Inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { WorkspaceService } from 'src/app/service/workspace.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  projectForm:any;
  constructor(public dialogRef: MatDialogRef<HomeComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private apiCall:WorkspaceService){}

  ngOnInit(){
    if(this.data !== null){
      this.projectForm = new FormGroup({
        projectName: new FormControl(this.data.projectName),
        projectDesc: new FormControl(this.data.projectDesc),
        projectId: new FormControl(this.data.projectId)
      })
    }else {

      this.projectForm = new FormGroup({
        projectName: new FormControl(),
        projectDesc:new FormControl(),
        projectId: new FormControl()
      })
      this.projectForm.reset();
    }
  }

  pdialog(){
    let user_id = localStorage.getItem('User_id');
    let data = {...this.projectForm.value, 'user_id':user_id};

    this.apiCall.createWorkspace(data).subscribe({next: (req:any) =>
      {
        Swal.fire({title:'your Workspace is created',icon:'success'})
      },error:(err: any) => {
        Swal.fire({title:'your Workspace not able create',icon:'error'})
      }
    })
    this.dialogRef.close()
  }

  close(){
    this.dialogRef.close()
  }
}
