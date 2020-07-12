import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [
    new Location('Brewd', '123 Kingstom', 'Sun 9-8', '876-455-4556')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
