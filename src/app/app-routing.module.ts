import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { Error404Component } from './Components/error404/error404.component';
import { ListusersComponent } from './Components/listusers/listusers.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hotels', component: HotelsComponent
  },
  {
    path: 'users',
    component: ListusersComponent
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
exports: [RouterModule]
})
export class AppRoutingModule { }
