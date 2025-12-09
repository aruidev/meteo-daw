import { Component } from '@angular/core';
import { GoogleMaps } from '../../components/google-maps/google-maps';
import { Glossary } from "../glossary/glossary";

@Component({
  selector: 'app-map',
  imports: [GoogleMaps, Glossary],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {

}
