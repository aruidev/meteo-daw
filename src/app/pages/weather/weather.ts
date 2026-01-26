import { Component, Renderer2, OnInit } from '@angular/core';
import { WeatherCard } from "../../components/weather-card/weather-card";
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-weather',
  imports: [WeatherCard],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {
  constructor(private renderer: Renderer2, public contentLangService: ContentLangService) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WeatherForecast",
      "name": "Updated weather forecast",
      "description": "Check the daily updated weather forecast at MeteoDAW.",
      "datePublished": "2025-12-02",
      "inLanguage": "en",
      "provider": {
        "@type": "Organization",
        "name": "MeteoDAW"
      }
    });
    this.renderer.appendChild(document.head, script);
  }
}
