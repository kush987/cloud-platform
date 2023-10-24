import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SystemOptionComponent } from './system-option/system-option.component';
import { InstancePageComponent } from './instance-page/instance-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CreateSpaceComponent } from './create-space/create-space.component';



const routes: Routes = [
  // {
  //   path:'/test',
  //   loadChildren: ()=> import('./landing-page/landing-page.module').then(
  //     (m)=>m.LandingPageModule
  //   ),
  // },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'sign-up',
    component: UserLoginComponent
  }, {
    path: 'login',
    component: SignInComponent
  }, {
    path: 'system-option',
    component: SystemOptionComponent
  },{
    path: 'instance',
    component:InstancePageComponent
  },{
    path:'work-space',
    component:CreateSpaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
