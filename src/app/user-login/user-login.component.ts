import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import Keyboard from "simple-keyboard";
import PocketBase from 'pocketbase';
import { Route, Router } from '@angular/router';
// 650d2b4858d0eb6f9c34 project id
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private route:Router, private apiCall: UserService) { }
  userRegistration: any;
  ngOnInit() {
    this.userRegistration = new FormGroup({
      fullName: new FormControl(),
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      passwordConfirm: new FormControl(),
    })
    this.userRegistration.reset();
    
  }
  signUp(){
      this.apiCall.signUpUser(this.userRegistration.value).subscribe({next:(data:any) =>{
        if(data){
          Swal.fire('Good job!',
          'Your account has been created!',
          'success')
        }
        this.route.navigate(['/login'])
      }, error:(error:any)=>{
        Swal.fire('Error!', `${error.error.message}`,'error')
      }})
    
    this.userRegistration.reset();
  }

  ngAfterViewInit() {
    // this.keyboard = new Keyboard({
    //   onChange: input => this.onChange(input),
    //   onKeyPress: button => this.onKeyPress(button),
    //   mergeDisplay: true,
    //   layoutName: "default",
    //   layout: {
    //     default: [
    //       "q w e r t y u i o p",
    //       "a s d f g h j k l",
    //       "{shift} z x c v b n m {backspace}",
    //       "{numbers} {space} {ent}"
    //     ],
    //     shift: [
    //       "Q W E R T Y U I O P",
    //       "A S D F G H J K L",
    //       "{shift} Z X C V B N M {backspace}",
    //       "{numbers} {space} {ent}"
    //     ],
    //     numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"]
    //   },
    //   display: {
    //     "{numbers}": "123",
    //     "{ent}": "return",
    //     "{escape}": "esc ⎋",
    //     "{tab}": "tab ⇥",
    //     "{backspace}": "⌫",
    //     "{capslock}": "caps lock ⇪",
    //     "{shift}": "⇧",
    //     "{controlleft}": "ctrl ⌃",
    //     "{controlright}": "ctrl ⌃",
    //     "{altleft}": "alt ⌥",
    //     "{altright}": "alt ⌥",
    //     "{metaleft}": "cmd ⌘",
    //     "{metaright}": "cmd ⌘",
    //     "{abc}": "ABC"
    //   }
      
    // });
  }

  onChange = (input: string) => {
    // this.value = input;
    // console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    // console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    // if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    // this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    // let currentLayout = this.keyboard.options.layoutName;
    // let shiftToggle = currentLayout === "default" ? "shift" : "default";

    // this.keyboard.setOptions({
    //   layoutName: shiftToggle
    // });
  };

  handleNumbers() {
    // let currentLayout = this.keyboard.options.layoutName;
    // let numbersToggle = currentLayout !== "numbers" ? "numbers" : "default";

    // this.keyboard.setOptions({
    //   layoutName: numbersToggle
    // });
  }



}
