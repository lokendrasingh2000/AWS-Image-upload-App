import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms'; 

Amplify.configure({
   Auth:{
     mandatorySignIn:true,
     region: 'us-east-2',
     userPoolId: 'us-east-2_OAkSRUyht',
     userPoolWebClientId: '5sp8spr63iv5kdf8p515kpaepf',
     authenticationFlowType:'USER_PASSWORD_AUTH'
   }
  
 });

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
