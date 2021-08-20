import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperComponent } from './helper/helper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HelperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
