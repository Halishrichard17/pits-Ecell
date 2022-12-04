import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    AboutComponent,
    TeamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
