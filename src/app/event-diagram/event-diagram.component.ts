import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-diagram',
  templateUrl: './event-diagram.component.html',
  styleUrls: ['./event-diagram.component.scss']
})
export class EventDiagramComponent implements OnInit {
  @Input() eventProps: any;
  @Input() eventInfo: any;


  constructor() { }

  ngOnInit() {
  }
  getStyleObject = () => {
    return { 'top': this.eventProps.start + 'px', 'width': this.eventProps.width + 'px', 'height': (this.eventProps.end - this.eventProps.start) + 'px', 'margin-left': this.eventProps.startingPoint + 'px'}

  }

}
