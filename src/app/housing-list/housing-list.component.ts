import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  
  @Input() locationList: HousingLocation[] = []

  results: HousingLocation[] = []

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>()

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(text: string) {
      if (!text) {
          return
      }

      this.results = this.locationList.filter(
          (location: HousingLocation) => location.city
          .toLowerCase()
          .includes(text.toLowerCase()
      ))
  }

  selectHousinLocation(location: HousingLocation) {
      this.locationSelectedEvent.emit(location)
  }
}
