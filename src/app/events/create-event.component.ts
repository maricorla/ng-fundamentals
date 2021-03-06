import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { EventsService } from "./shared/index";

@Component({
    templateUrl: "create-event.component.html",
     styles: [`
  em {float:right; color: #E05C65; padding-left: 10px;}
  .error input{background-color:#E3C3C5}
  .error ::-webkit-input-placeholder {color:#999;}
  .error ::-moz-placeholder {color:#999;}
  .error :-moz-placeholder {color:#999;}
  .error :ms-input-placeholder {color:#999;}
  `]

})

export class CreateEventComponent{
    newEvent:any
    isDirty: boolean = true;
    constructor(private router: Router, private eventService: EventsService) { }
    
    cancel() {
        this.router.navigate(['/events'])
    }


    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events'])
    }

   

}