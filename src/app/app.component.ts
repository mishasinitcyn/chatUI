import { Component, HostListener } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PdfModalComponent } from './pdf-modal/pdf-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private modalService: NzModalService) {}
  tab = 1;
  title = 'MLChat';
  isMobile = window.innerWidth < 992;

  openPdfModal() {
    this.modalService.create({
      nzContent: PdfModalComponent,
      nzFooter: null,
      nzWidth: this.isMobile? 'auto' : '70vw',
      nzData: {
        isMobile: this.isMobile
      }
    });
  }

}