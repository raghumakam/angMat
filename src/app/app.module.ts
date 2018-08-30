/* Angular Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* App module Imports */
import { MaterialDesignModule } from './modules/material-design/public-apis';
import { RoutingModule } from './modules/routing/public-apis';
import { UtilsModule, NavBarComponent } from './modules/utils/public-apis';

/* App Component Imports */
import { AppComponent } from './app.component';

/* App Imports */
import { AuthService, HttpCallInterceptor, HttpListenerService, TrimTextPipe  } from "./index";

@NgModule({
  declarations: [
    AppComponent,
    TrimTextPipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MaterialDesignModule,
    RoutingModule,
    UtilsModule
  ],  
  providers: [
    AuthService,
    HttpListenerService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpCallInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
