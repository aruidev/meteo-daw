import { ChangeDetectionStrategy, Component, OnInit, Renderer2 } from '@angular/core';
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact implements OnInit {
  constructor(private renderer: Renderer2, public contentLangService: ContentLangService) {}

  ngOnInit() {
    const existing = document.querySelector('script[data-schema="contact-ld"]');

    if (existing) {
      return;
    }

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'contact-ld');
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact MeteoDAW',
      description: 'Contact page for inquiries and suggestions about MeteoDAW.',
      publisher: {
        '@type': 'Organization',
        name: 'MeteoDAW',
      },
    });
    this.renderer.appendChild(document.head, script);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }
}
