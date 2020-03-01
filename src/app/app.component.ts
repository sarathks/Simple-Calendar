import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventManager';
  public timeInterval;
  public arrayToBeRendered: any = [];
  public eventContent: Object;
  constructor() {
    //Create an array for generating time from 9 AM to 9 PM
    this.timeInterval = Array.from({ length: environment.range }, (v, k) => k + environment.startTime);
    //Sample array of events
    let timeEvents = [{ start: 30, end: 150 }, { start: 540, end: 600 }, { start: 560, end: 620 }, { start: 610, end: 670 }];
    this.eventContent = {'sampleItem' : 'sampleItem', 'sampleLocation' : 'sampleLocation'}
    this.layOutDay(timeEvents);
  }

  layOutDay = (events) => {
    /* Sort all the events based on the starting time */
    events.sort((a, b) => a.start - b.start);

    /* Declare an array to store all the events to be displayed */
    this.arrayToBeRendered = [];
    var conflicts: any

    /* Compare each events with every elements to the rihgt and findout the conflicting or colliding events  */
    events.forEach((event, indexOfEvent) => {
      this.initializeStartingPoint(event);
      conflicts = [event, ...this.groupConflictingEvents(event, events.slice(indexOfEvent + 1, events.length))];
      this.calculateWidthAndStartingPoint(conflicts);
      this.arrayToBeRendered.push(conflicts);
    });

    //Remove duplicate events and flatten the event array
    this.arrayToBeRendered = [...new Set(this.arrayToBeRendered.flat())];
  }

  /* initialize starting point for all events. startingPoint represents the initial horizontal pixel value of each event */
  initializeStartingPoint = (eventToBeInitialised) => {
    eventToBeInitialised.startingPoint = eventToBeInitialised.startingPoint === undefined ? 0 : eventToBeInitialised.startingPoint;
  }

  /* Find out conflicting elements and group them */
  groupConflictingEvents = (eventToBeChecked, eventsToBeGrouped) => {
    return eventsToBeGrouped.filter(event => eventToBeChecked.end >= event.start)
  }

  /* Calculate width and starting point of each events */
  calculateWidthAndStartingPoint = (confEvents) => {
    confEvents.forEach((confEvent, index) => {
      /* Calculate width */
      confEvent.width = confEvent.width ? confEvent.width : environment.renderingWidth / confEvents.length;
      if (confEvents.length > 1 && confEvents[index].startingPoint === 0) {
        this.calculateStartingPoint(confEvents, index);
      }
    });
  }

  /* Calculate starting point */
  calculateStartingPoint = (collidingEvents, iterator) => {
    for (let m = iterator + 1; m < collidingEvents.length; m++) {
      collidingEvents[m].startingPoint = collidingEvents[m - 1].width + collidingEvents[m - 1].startingPoint;
    }
  }

}


