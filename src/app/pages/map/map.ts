import { Component, Renderer2, OnInit } from '@angular/core';
import { GoogleMaps } from '../../components/google-maps/google-maps';
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-map',
  imports: [GoogleMaps],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements OnInit {
  constructor(
    private renderer: Renderer2,
    public contentLangService: ContentLangService,
  ) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Map',
      description: 'Interactive map with weather data and locations.',
      datePublished: '2025-12-15',
      inLanguage: 'en',
      provider: { '@type': 'Organization', name: 'MeteoDAW' },
    });
    this.renderer.appendChild(document.head, script);
  }
}
