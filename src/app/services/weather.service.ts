import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(cityName: string, lang: string) {
    return this.http.get(`${environment.weatherApiBaseUrl}city?city=${cityName}&lang=${lang}`, environment.options);
  }

  getWeatherByLatLon(lat: number, lon: number, lang: string) {
    return this.http.get(`${environment.weatherApiBaseUrl}latlon?latitude=${lat}&longitude=${lon}&lang=${lang}`, environment.options);
  }

  getCalcTime(city: string, offset: number) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString();
  }

}
