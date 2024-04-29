import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { TextbookChapters, TextbookPath } from '../interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
    menuItems = TextbookChapters
    textbook_path = TextbookPath;

    constructor(private appComponent: AppComponent) { }

    openPdfModal(pdfSrc: string) {
        this.appComponent.openPdfModal(pdfSrc);
    }

}