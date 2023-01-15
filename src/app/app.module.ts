import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon' 
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card' 
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // NgbCarouselModule,
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
