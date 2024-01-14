import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { TrailsByCityComponent } from './trails-by-city/trails-by-city.component';
import { TrailsListComponent } from './trails-list/trails-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailsByCityComponent,
    TrailsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
