import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {CreateComponent} from "../components/create/create.component";
import {EditComponent} from "../components/edit/edit.component";
import {RandomComponent} from "../components/random/random.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'random',
    component: RandomComponent
  }
  ];
