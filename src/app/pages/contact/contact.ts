import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact MeteoDAW",
      "description": "Contact page for inquiries and suggestions about MeteoDAW.",
      "publisher": {
        "@type": "Organization",
        "name": "MeteoDAW"
      }
    });
    this.renderer.appendChild(document.head, script);
  }
}
