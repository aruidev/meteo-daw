import { Component, Renderer2, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(
    private renderer: Renderer2,
    public contentLangService: ContentLangService
  ) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Home',
      description:
        'Main page of MeteoDAW with access to weather forecast, map, and project information.',
      datePublished: '2025-12-02',
      inLanguage: 'en',
      provider: { '@type': 'Organization', name: 'MeteoDAW' },
    });
    this.renderer.appendChild(document.head, script);
  }
}
