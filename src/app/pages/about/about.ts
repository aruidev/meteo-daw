import { Component, Renderer2, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About MeteoDAW",
      "description": "Information about the MeteoDAW project, a weather website.",
      "publisher": {
        "@type": "Organization",
        "name": "MeteoDAW"
      }
    });
    this.renderer.appendChild(document.head, script);
  }
}
