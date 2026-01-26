import { Component, computed, Renderer2, OnInit } from '@angular/core';
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-glossary',
  imports: [],
  templateUrl: './glossary.html',
  styleUrl: './glossary.css',
})
export class Glossary implements OnInit {
  constructor(
    private renderer: Renderer2,
    public contentLangService: ContentLangService,
  ) {}

  groupedEntries = computed(() => {
    const entries = this.contentLangService.content().glossary.entries;
    const groups: Record<string, { letter: string; items: typeof entries }> = {};

    for (const entry of entries) {
      const letter = entry.term.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = { letter, items: [] };
      }
      groups[letter].items.push(entry);
    }

    return Object.values(groups).sort((a, b) => a.letter.localeCompare(b.letter));
  });

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Glossary',
      description: 'Glossary of meteorological terms and weather-related concepts.',
      datePublished: '2025-12-15',
      inLanguage: 'en',
      provider: { '@type': 'Organization', name: 'MeteoDAW' },
    });
    this.renderer.appendChild(document.head, script);
  }
}
