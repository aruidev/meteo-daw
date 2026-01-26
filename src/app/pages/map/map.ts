import { Component } from '@angular/core';
import { GoogleMaps } from '../../components/google-maps/google-maps';
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-map',
  imports: [GoogleMaps],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  constructor(public contentLangService: ContentLangService) {}
}
