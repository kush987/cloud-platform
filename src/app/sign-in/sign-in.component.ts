import { Component, EventEmitter, Output } from '@angular/core';
// import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import PocketBase from 'pocketbase';
import { Token } from '@angular/compiler';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userData: any;
  constructor(private apiCall: UserService,private router:Router) { }
  userLogin: any;
  @Output() loginState: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
    this.userLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    this.userLogin.reset();
  }

  changeData(event: any) {
    // var msg = event.target.value;
    // this.user.changeData(msg);z
  }
  async login() {
    console.log(this.userLogin.value)
    this.apiCall.signInUser(this.userLogin.value).subscribe({next: (data: any) => {
      if (data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully logged In',
          showConfirmButton: false,
          timer: 1500,
        })
        localStorage.setItem('User_id',data.user_id)
        localStorage.setItem('Username',data.username)
        localStorage.setItem('Token',data.token)
        this.loginState.emit(true)
      }
      this.router.navigate(['/'])
    },error: (error: any) => {
      Swal.fire('Error!', `${error.error.message}`, 'error')
    }})
    this.userLogin.reset();
  }
}
