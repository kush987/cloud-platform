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
      name:'Products',
      icon:'fa-solid fa-box',
      router:'/system-option',
    },
    {
      name:'Work Space',
      icon:'fa-solid fa-rocket',
      router:'/work-space',
    },
    {
      name:'Instance',
      icon:'fa-solid fa-link fa-beat',
      router:'/instance',
    },
    {
      name:'Account',
      icon:'fa-solid fa-gear',
      router:'',
    },
    {
      name:'Support',
      icon:'fa-solid fa-circle-info',
      router:'',
    }
  ] 
  
  constructor(){}

  ngOnInit(){

  }
}
