import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';


// ROUTING

import { ROUTING, APP_ROUTING_PROVIDERS } from './app.routing';

// Componentes!
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { UserService } from './services/user.service';
import { UploadService } from './services/upload.service';

import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    APP_ROUTING_PROVIDERS,
    UserService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
