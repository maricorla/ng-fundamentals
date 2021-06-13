import { Injectable } from "@angular/core";
import { env } from "process";
import { Observable, Subject } from "rxjs";
import { IEvent } from "./event.model";

@Injectable()
export class EventsService{
  getEvents(): Observable <IEvent[]> {
    let subject = new Subject <IEvent[]>()
    setTimeout(() => { subject.next(EVENTS); subject.complete();}, 200)
        return subject;
    }

    getEvent(id: number): IEvent {
        return EVENTS.find(event=>event.id===id)
  }
  
  saveEvent(event) {
    event.id = 999;
    event.sessions = [];
    EVENTS.push(event)
  }

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id)
    EVENTS[index]=event
  }
}

const EVENTS: IEvent []=[
    {
      id: 1,
      name: 'Angular Connect',
      date: new Date ('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: [
        {
          id: 1,
          name: "Using Angular 4 Pipes",
          presenter: "Peter Bacon Darwin",
          duration: 1,
          level: "Intermediate",
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Getting the most out of your dev team",
          presenter: "Jeff Cross",
          duration: 1,
          level: "Intermediate",
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Angular 4 Performance Metrics",
          presenter: "Rob Wormald",
          duration: 2,
          level: "Advanced",
          voters: []
        },
        {
          id: 4,
          name: "Angular 5 Look Ahead",
          presenter: "Brad Green",
          duration: 2,
          level: "Advanced",
          voters: []
        },
        {
          id: 5,
          name: "Basics of Angular 4",
          presenter: "John Papa",
          duration: 2,
          level: "Beginner",
          voters: ['bradgreen', 'igorminar']
        }
      ]
    },
    {
      id: 2,
      name: 'ng-nl',
      date: new Date ('9/26/2037'),
      time: '9:00 am',
      price: 950.00,
      imageUrl: '/assets/images/ng-nl.png',
      onlineUrl:'https://www.onliner.by/',
      sessions: [
        {
          id: 1,
          name: "Testing Angular 4 Workshop",
          presenter: "Pascal Precht & Christoph Bergdorf",
          duration: 4,
          level: "Beginner",
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Angular 4 and Firebase",
          presenter: "David East",
          duration: 3,
          level: "Intermediate",
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "Reading the Angular 4 Source",
          presenter: "Patrick Stapleton",
          duration: 2,
          level: "Intermediate",
          voters: ['martinfowler']
        },
        {
          id: 4,
          name: "Hail to the Lukas",
          presenter: "Lukas Ruebbelke",
          duration: 1,
          level: "Beginner",
          voters: ['bradgreen']
        },
      ]
    },
    {
      id: 3,
      name: 'ng-conf 2037',
      date: new Date ('9/26/2036'),
      time: '9:00 am',
      price: 759.00,
      imageUrl: '/assets/images/ng-conf.png',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "How Elm Powers Angular 4",
          presenter: "Murphy Randle",
          duration: 2,
          level: "Intermediate",
          voters: ['bradgreen', 'martinfowler', 'igorminar']
        },
        {
          id: 2,
          name: "Angular and React together",
          presenter: "Jamison Dance",
          duration: 2,
          level: "Intermediate",
          voters: ['bradgreen', 'martinfowler']
        },
        {
          id: 3,
          name: "Redux Woes",
          presenter: "Rob Wormald",
          duration: 1,
          level: "Intermediate",
          voters: ['bradgreen', 'martinfowler', 'johnpapa']
        },
        {
          id: 4,
          name: "ng-wat again!!",
          presenter: "Shai Reznik",
          duration: 1,
          level: "Beginner",
          voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
        },
        {
          id: 5,
          name: "Dressed for Success",
          presenter: "Ward Bell",
          duration: 2,
          level: "Beginner",
          voters: ['bradgreen', 'martinfowler']
        },
        {
          id: 6,
          name: "These aren't the directives you're looking for",
          presenter: "John Papa",
          duration: 2,
          level: "Intermediate",
          voters: ['bradgreen', 'martinfowler']
        },
      ]
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: new Date ('9/26/2036'),
      time: '8:00 am',
      price: 800.00,
      imageUrl: '/assets/images/basic-shield.png',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "Diversity in Tech",
          presenter: "Sir Dave Smith",
          duration: 2,
          level: "Beginner",
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "World Peace and Angular",
          presenter: "US Secretary of State Zach Galifianakis",
          duration: 2,
          level: "Beginner",
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "Using Angular with Androids",
          presenter: "Dan Wahlin",
          duration: 3,
          level: "Advanced",
          voters: ['igorminar', 'johnpapa']
        },
      ]
    },
    {
      id: 5,
      name: 'ng-vegas',
      date: new Date ('9/26/2036'),
      time: '9:00 am',
      price: 400.00,
      imageUrl: '/assets/images/ng-vegas.png',
      location: {
        address: 'The Excalibur',
        city: 'Las Vegas',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "Gambling with Angular",
          presenter: "John Papa",
          duration: 1,
          level: "Intermediate",
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Angular 4 in 60ish Minutes",
          presenter: "Dan Wahlin",
          duration: 2,
          level: "Beginner",
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        }
      ]
    }
  ]