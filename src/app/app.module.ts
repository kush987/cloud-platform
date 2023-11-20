import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignInComponent } from './sign-in/sign-in.component';
import { SystemOptionComponent } from './system-option/system-option.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthInterceptor } from 'src/customFolder/auth.interceptor';
import { InstancePageComponent } from './instance-page/instance-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CreateSpaceComponent } from './create-space/create-space.component';
import { FormComponent } from './form/form.component';
import { MatSelectModule } from '@angular/material/select';
import { ChooseServerComponent } from './choose-server/choose-server.component';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { DialogComponent } from './dialogForm/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserLoginComponent,
    SignInComponent,
    SystemOptionComponent,
    // DialogComponent,
    DialogBoxComponent,
    InstancePageComponent,
    SideNavComponent,
    CreateSpaceComponent,
    FormComponent,
    ChooseServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    // SweetAlert2Module.forRoot()
  ],
  providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
