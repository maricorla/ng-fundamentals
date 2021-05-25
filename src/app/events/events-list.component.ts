import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1> Upcoming Angular Events</h1>
    <hr />
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1" ></event-thumbnail>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event2" ></event-thumbnail>
    </div>`
    
})

export class EventListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/24/2036',
        time: '10:00 am',
        price: 390.90,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country:'England'
        }
    }

        event2 = {
        id: 1,
        name: 'Angular Connec tghertyhjerytghertht',
        date: '9/24/2036',
        time: '10:00 am',
        price: 390.90,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country:'England'
        }
    }

    handleEventClicked(data) {
        console.log('received', data)
    }

}