
import { signal, computed, Injectable } from '@angular/core';
import { CaContent } from '../content/ca';
import { EnContent } from '../content/en';
import { CaContent as EsContent } from '../content/es';

type Lang = 'ca' | 'en' | 'es';
type Content = typeof CaContent;

const contentMap: Record<Lang, Content> = {
	ca: CaContent,
	en: EnContent,
	es: EsContent,
};

@Injectable({ providedIn: 'root' })
export class ContentLangService {
	private lang = signal<Lang>('en');

	setLang(lang: Lang) {
		if (contentMap[lang]) {
			this.lang.set(lang);
		}
	}

	getLang = computed(() => this.lang());

	get content() {
		return computed(() => contentMap[this.lang()]);
	}
}
