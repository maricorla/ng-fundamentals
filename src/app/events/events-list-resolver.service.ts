import { Injectable } from "@angular/core";
import{Resolve} from '@angular/router'
import { EventsService } from "./shared/event.service";
import {map} from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any>{

constructor(private eventsService:EventsService){}

    resolve() {
       return this.eventsService.getEvents().pipe(map(events=>events))
    }
    
}