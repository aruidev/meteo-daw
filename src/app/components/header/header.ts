import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ContentLangService } from '../../services/contentLang.service';

const LANGS = [
  { code: 'ca', label: 'Català' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  languages = LANGS;
  selectedLang = computed(() => this.contentLangService.getLang());

  constructor(public contentLangService: ContentLangService) {}

  onLangChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'ca' | 'es' | 'en';
    this.contentLangService.setLang(value);
  }
}
