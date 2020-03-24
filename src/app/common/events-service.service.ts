import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  events = new Subject<EventData>();

  events$: Observable<EventData> = this.events.asObservable();

  constructor() {}

  publish(eventData: EventData) {
    this.events.next(eventData);
  }
  closed() {
    this.events.isStopped = true;
  }
}

export class EventData {
  key: string;
  data?: any | undefined;

  constructor(key: string, data?: any | undefined) {
    this.key = key;
    this.data = data;
  }
}
