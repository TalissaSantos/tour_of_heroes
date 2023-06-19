import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    MessagesComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
