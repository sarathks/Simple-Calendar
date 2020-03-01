import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDiagramComponent } from './event-diagram.component';

describe('EventDiagramComponent', () => {
  let component: EventDiagramComponent;
  let fixture: ComponentFixture<EventDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
