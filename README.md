# Simple Calander App

Given a set of events, each with a start time and end time, render the events on a single day
calendar (similar to Outlook, Calendar.app, and Google Calendar). There are several properties of
the layout:
* No events may visually overlap.
* If two events collide in time, they MUST have the same width. This is an invariant. Call this
width W.
* W should be the maximum value possible without breaking the previous invariant.
* Each event is represented by a JavaScript object with a start and end attribute.
* The value of these attributes is the number of minutes since 9am. So {start:30, end:90)
represents an event from 9:30am to 10:30am.
* The events should be rendered in a container that is 620px wide (600px + 10px padding
on the left/right) and 720px long (the day will end at 9pm).

## Technology Stack
Technology         | Description (version)
-------------------|----------------------------------------------------
Angular            | Core javascript framework (Angular CLI: 8.3.21, Angular: 8.2.14)
Typescript         | Programming Language (3.5.3)


## Quick start

### Prerequisites
* Node.js (https://nodejs.org/en/) [Preferable version V10+]
* Angular cli (https://cli.angular.io/) 

### Clone the repo
```shell
git clone https://github.com/sarathks/Simple-Calendar.git
```
 
