import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RandomComponent } from './components/random/random.component';
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
