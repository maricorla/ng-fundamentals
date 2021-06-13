import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventsService } from "../shared/event.service";


@Injectable()
export class EventRouteActivator implements CanActivate{

    constructor(private eventService: EventsService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const eventExists = !!this.eventService.getEvent(+route.params['id']) //взять ид
        
        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
 }
    
   
       