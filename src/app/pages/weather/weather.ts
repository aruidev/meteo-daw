import { Component } from '@angular/core';
import { WeatherCard } from "../../components/weather-card/weather-card";

@Component({
  selector: 'app-weather',
  imports: [WeatherCard],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {

}
