import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Welcome } from '../../models/weather.model';
import { FormsModule } from '@angular/forms';

type WeatherData = {
    name: string;
    temp: number;
    maxTemp: number;
    minTemp: number;
    wind: number;
    humidity: number;
  };

@Component({
  selector: 'app-weather-card',
  imports: [DecimalPipe, FormsModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCard implements OnInit {

  city: string = 'Barcelona';
  lang: string = 'EN';
  offset: number = 3600;
  welcome?: Welcome;
  weatherData?: WeatherData;

  private weatherService = inject(WeatherService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getWeatherByCity(this.city);
  }

  farenheitToCelsius(fahrenheit: number): number {
    return this.weatherService.farenheitToCelsius(fahrenheit);
  }
  
  onSubmit(): void {
    this.getWeatherByCity(this.city);
    this.city = '';
  }

  private getWeatherByCity(cityName: string): void {
    this.weatherService.getWeatherByCity(cityName, this.lang)
    .subscribe({
      next: (response) => {
        this.welcome = response as Welcome;
        this.weatherData = {
          name: this.welcome.name,
          temp: this.farenheitToCelsius(this.welcome.main.temp),
          maxTemp: this.farenheitToCelsius(this.welcome.main.temp_max),
          minTemp: this.farenheitToCelsius(this.welcome.main.temp_min),
          wind: this.welcome.wind.speed,
          humidity: this.welcome.main.humidity
        };
        console.log(this.weatherData);
        this.cdr.markForCheck();
      }
    });
  }

}
