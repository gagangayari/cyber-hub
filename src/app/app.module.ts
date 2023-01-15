import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon' 
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card' 
import {MatFormFieldModule} from '@angular/material/form-field' 
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap'
import {MatInputModule} from '@angular/material/input' 
import {MatDialogModule} from '@angular/material/dialog' 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LatestComponent } from './components/latest/latest.component';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LatestComponent
  ],
  imports: [
    NgbCarouselModule,
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
