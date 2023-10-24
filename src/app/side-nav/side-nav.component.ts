import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  
  @Input() sideNavStatus: boolean = false;
  list =[
    {
      number:'1',
      name:'Overview',
      icon:'fa-solid fa-signal',
      router:'',
    },
    {
      number:'2',
      name:'Analytics',
      icon:'fa-solid fa-chart-line',
      router:'',
    },
    {
      number:'3',
      name:'Work Space',
      icon:'fa-solid fa-rocket',
      router:'/work-space',
    },
    {
      number:'4',
      name:'Services',
      icon:'fa-solid fa-box',
      router:'/system-option',
    },
    {
      number:'5',
      name:'Instance',
      icon:'fa-solid fa-link fa-beat',
      router:'/instance',
    },
    {
      number:'6',
      name:'Settings',
      icon:'fa-solid fa-gear',
      router:'',
    },
    {
      number:'7',
      name:'About Us',
      icon:'fa-solid fa-circle-info',
      router:'',
    },
    {
      number:'8',
      name:'Contact',
      icon:'fa-solid fa-address-card',
      router:'',
    },
  ]
  
  constructor(){}

  ngOnInit(){

  }
}
