import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather.model';

@Component({
  selector: 'app-weather-card',
  imports: [DecimalPipe],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard implements OnInit {

  city: string = 'Madrid';
  lang: string = 'EN';
  offset: number = 3600;
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherByCity(this.city, this.lang)
      .subscribe({
        next: (response) => {
          this.weatherData = response as WeatherData;
      }
    });
  }

}
