import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
    menuItems = [
      {
        title: "Math for Machine Learning",
        chapters: ["3", "4", "6", "7", "12"]
      },
      {
        title: "The Elements of Statistical Learning",
        chapters: ["7.10", "8.2", "8.3", "12"]
      },
      {
        title: "An Introduction to Statistical Learning",
        chapters: ["2.2.2", "6.2", "9", "10"]
      },
      {
        title: "Deep Learning",
        chapters: ["5", "6", "8", "9", "14"]
      },
      {
        title: "Stanford CS229",
        chapters: ["6", "7", "8", "9"]
      }
    ];
  
    textbook_path = 'assets/PDF/';

    constructor(private appComponent: AppComponent) { }

    openPdfModal(pdfSrc: string) {
        this.appComponent.openPdfModal(pdfSrc);
    }

}