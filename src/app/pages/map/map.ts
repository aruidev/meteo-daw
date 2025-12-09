import { Component } from '@angular/core';
import { GoogleMaps } from '../../components/google-maps/google-maps';

@Component({
  selector: 'app-map',
  imports: [GoogleMaps],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {

}
