import { Component } from '@angular/core';
import { WorkspaceService } from '../service/workspace.service';
import Swal from 'sweetalert2';
import { CollectionService } from 'pocketbase';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-space',
  templateUrl: './create-space.component.html',
  styleUrls: ['./create-space.component.css']
})
export class CreateSpaceComponent {
  workspaceData: any[] | undefined;
  formRequirement: boolean =false;

  constructor(private workSpaceAPI: WorkspaceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getWorkspace();
  }

  formDialog() {
    const dialogRef = this.dialog.open(FormComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.formRequirement = true;
      this.getWorkspace();
    });
  }

  editWorkspace(item:any){
    const dialogRef = this.dialog.open(FormComponent, {data:item});
    dialogRef.afterClosed().subscribe(result => {
      this.formRequirement = true;
      this.getWorkspace();
    })
  }

  getWorkspace() {
    let userId = localStorage.getItem('User_id');
    this.workSpaceAPI.getWorkSpace(userId).subscribe({
      next: (res: any) => {
        this.workspaceData = res.data;
      }, error: (err: any) => {
        Swal.fire({ "title": "no data", "icon": "warning" })
      }
    })
  }
  deleteProject(item: any) {
    let object = { ...item };
    this.workSpaceAPI.deleteWorkSpace(object.projectId).subscribe({
      next: (res: any) => {
        Swal.fire({ "title": "Project got deleted", "icon": "success" })
        this.getWorkspace();
      }, error: (err: any) => {
        Swal.fire({ "title": "Error to delete", "icon": "warning" })
        this.getWorkspace();
      }
    })
  }
  
  showDropdown(projectId:any){
    const dropdown = document.getElementById(`mydropDown_${projectId}`);
    
    if (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      } else {
        dropdown.classList.add("show");
      }
    }
  }
}
