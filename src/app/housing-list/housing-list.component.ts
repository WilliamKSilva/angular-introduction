import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  
  @Input() locationList: HousingLocation[] = []

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(text: string) {
      console.log(text)
  }

}
