import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItineraryService } from '../../services/itinerary-service/itinerary.service';
import { EventComponent } from './event/event.component';
import { Itinerary } from '../../services/itinerary-service/model/itinerary.model';
import { SharedataService } from '../../services/sharedata/sharedata.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],

})
export class ItineraryComponent implements OnInit {

  itinerary: Itinerary = new Itinerary();
  isPopupOpened = false;
  itineraryName: String="New Itinerary Name";
  note: String = "New note";
  constructor(

    private dataS: SharedataService,
    private dialog?: MatDialog,
    private eventService?: ItineraryService,
    public itineraryService?: ItineraryService,
  ) { }

  ngOnInit() {
   console.log("DAte "+ this.itineraryService.getDate());
    this.itineraryService.eventList = [];
    this.dataS.shareUserData();
    this.dataS.currentMessge.subscribe(traveAgentdata => {
      this.itinerary.traveAgentName = traveAgentdata.username;
    });
  }

  get EventList() {
    //console.log(JSON.stringify(this.eventService.getAllEvents()));
    return this.eventService.getAllEvents();
  }
  
  addEvent() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EventComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    })
  }

  editEvent(id: number) {
    this.isPopupOpened = true;
    const event = this.eventService.getAllEvents().find(c => c.id === id);
    console.log(event);
    const dialogRef = this.dialog.open(EventComponent, {
      data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    })
  }

  deleteEvent(id: number) {
    this.eventService.removeEvent(id);
  }

  addItinerary() {
    
    
    this.itinerary.name = this.itineraryName;
    this.itinerary.note = this.note;
    this.itinerary.date_time = this.itineraryService.getDate();

    // this.itinerary.itineraryName = this.eventService;
    this.itinerary.events = this.eventService.getAllEvents();
    this.itineraryService.postItinerary(this.itinerary).subscribe((res) => {

      alert('Itinerary Saved');

      console.log("Saved");

    });
  }


}
