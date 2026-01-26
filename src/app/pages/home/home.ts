import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ContentLangService } from '../../services/contentLang.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public contentLangService: ContentLangService) {}
}
