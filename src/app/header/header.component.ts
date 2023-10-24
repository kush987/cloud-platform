import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
// import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('searchAnimation', [
      state('show', style({ maxWidth: '100%' })),
      state('hide', style({ maxWidth: '0' })),
      transition('hide => show', animate('300ms ease-in')),
      transition('show => hide', animate('300ms ease-out'))
    ])
  ],
})
export class HeaderComponent {
  searchState: 'show' | 'hide' = 'hide';
  buttonState: 'hide' | 'show' = 'show';
  // searchState: boolean =false;
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = true;
  loginState: boolean = false;
  inputWidth: string = '';
  getWidth: string = '0px';
  ngOnInit() {
    this.checkUserlogin();
  }
  ngOnChange() {
    this.checkUserlogin();
  }

  sideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  toggleSearch() {
    this.searchState = this.searchState === 'show' ? 'hide' : 'show';
    this.buttonState = this.buttonState === 'hide' ? 'show' : 'show';
    this.getWidth = this.searchState === 'show' ? '90%' : '0%';
  }
  checkUserlogin() {
    this.loginState = !!localStorage.getItem('Token');
  }

  logOut() {
    const keysToRemove = ['Token', 'User_id', 'Username'];

    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });
    setInterval(() => {

      this.checkUserlogin();
    }, 100)

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully logout',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  performSearch() {
    // Perform search logic here
  }
}
