import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';

import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SigninComponent } from './User/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignInComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClient 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
