import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  imports: [DecimalPipe],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard implements OnInit {

  city: string = 'Madrid';
  lang: string = 'es';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherByCity(this.city, this.lang)
      .subscribe({
        next: (response) => {
          console.log(response);
      }
    });
  }

}
