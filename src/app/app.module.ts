import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RandomComponent } from './components/random/random.component';
import {HomeComponent} from "./components/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './components/shared/menubar/menubar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/routes";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {MatLineModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    RandomComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonToggleModule,
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    MatLineModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
