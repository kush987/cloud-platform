import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formRequirement : Boolean= false;
  list = [{
    number:'1',
    title:'20+ free products for all customers',
    description:"All customers get free hands-on experience with popular products, including Compute Engine and Cloud Storage, up to monthly limits." ,
  },{
    number:'2',
    title:'$300 in free credits for new customers',
    description:'New customers get $300 in free credits to fully explore and conduct an assessment of Google Cloud. You won’t be charged until you upgrade.',
  },{
    number:'3',
    title:'Additional free credits for businesses',
    description:'New customers who verify their business email will get additional free credits to use while exploring and evaluating Google Cloud.'
  }
]

constructor(private dialog: MatDialog){}

formDialog(){
  const dialogRef = this.dialog.open(FormComponent);

  dialogRef.afterClosed().subscribe(result => {
    this.formRequirement = true;
  });
}
}

// Elastic Security
// Dain Perkins

// Daniel Rohan
