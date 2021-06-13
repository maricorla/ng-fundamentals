import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventThumbnailComponent,
  EventDetailsComponent,
  EventListResolver,
  EventListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsService,
  CreateSessionComponent,
  SessionListComponent

  
} from './events/index'

import { AppRoutingModule, routes } from './app-routing.module';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventsService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }],
  bootstrap: [EventsAppComponent
  ]
})
export class AppModule { }

  export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) { 
  return window.confirm('You have not saved this event');
}
    return true;
  }

