import { Component, computed } from '@angular/core';
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-glossary',
  imports: [],
  templateUrl: './glossary.html',
  styleUrl: './glossary.css',
})
export class Glossary {
  constructor(public contentLangService: ContentLangService) {}

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

}
