import { Component, Input} from "@angular/core";
import { IEvent } from "./shared";


@Component({
    selector: 'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngSwitch]="event?.time">Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault="'8:00 am'">(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span>&nbsp;</span>
            <span>{{event?.location?.city}}, {{event?.location?.country}}</span></div>
        <div *ngIf="event?.onlineUrl"> Online URL: {{event?.onlineUrl}}</div>
    </div>`,
    styles: [`.well div {color:#bbb;}
    .thumbnail{min-height: 210px;}`]
})
export class EventThumbnailComponent{
    @Input() event: IEvent;
   
}