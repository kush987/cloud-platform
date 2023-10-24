import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-system-option',
  templateUrl: './system-option.component.html',
  styleUrls: ['./system-option.component.css']

})
export class SystemOptionComponent {
  checkRequirement: Boolean= false;

  systemoOption = [{
    avater:"https://www.pngmart.com/files/23/Blender-Logo-Transparent-PNG.png",
    title:"Blender",
    subTitle:"3D Modeling",
    image:"https://wiztoonz.com/wp-content/uploads/2022/04/Blender-Post-Intro-1170x658.jpg",
    alter:"Photo of a Shiba Inu",
    desc:"Blender is now on cloud 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, \
    even video editing and game creation. Advanced users employ Blender’s API for \
    Python scripting to customize the application and write specialized tools; \
    often these are included in Blender’s future releases."
  },{
    avater:"https://res.cloudinary.com/apideck/image/upload/v1670370218/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/Visual_Studio_Code_1.35_icon.svg_e5h4ju.png",
    title:"VsCode",
    subTitle:"Software IDE",
    image:"https://miro.medium.com/v2/resize:fit:480/1*MGcLJS1ZvMFcBA94PXn16Q.png",
    alter:"Photo of a Shiba Inu",
    desc:"Visual Studio Code is an ideal code editor for cloud development, thanks to its versatility and extensive ecosystem of extensions. Cloud development typically involves building, deploying, and managing applications or services on cloud platforms like AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform, or others. VS Code offers several features and extensions that make it a preferred choice for cloud development:"

  }
];
  // dialog: MatDialog;
  // requirementCheck(){
    
  // }
  constructor(private dialog: MatDialog) {}

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(DialogBoxComponent , {
      data: {title: item.title, subtitle: item.subTitle},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.checkRequirement = true;
    });
  }

}
