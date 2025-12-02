import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes rain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rain forms when water vapor in the air cools and condenses into droplets, which combine and fall to the ground when heavy enough."
          }
        },
        {
          "@type": "Question",
          "name": "How is a weather forecast made?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meteorologists use data from satellites, weather stations, and computer models to predict future weather conditions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between weather and climate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Weather describes short-term atmospheric conditions, while climate refers to the average weather patterns over a long period."
          }
        },
        {
          "@type": "Question",
          "name": "Why do weather forecasts change?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Forecasts are updated as new data becomes available, improving accuracy as the predicted time approaches."
          }
        },
        {
          "@type": "Question",
          "name": "What is a weather alert or warning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A weather alert or warning is issued by meteorological agencies to inform the public about severe weather conditions that may pose risks to safety or property."
          }
        }
      ]
    });

    this.renderer.appendChild(document.head, script);
  }
}
