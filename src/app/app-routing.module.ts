import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,  
  EventListComponent,
  CreateSessionComponent
} from './events/index'

export const routes: Routes = [
  {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent' ]},
  { path: 'events', component: EventListComponent, resolve:{events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
  { path:'404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'events/session/new', component:CreateSessionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
