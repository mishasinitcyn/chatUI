import { Component, HostListener } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PdfModalComponent } from './pdf-modal/pdf-modal.component';
import { FAQModalComponent } from './utils/FAQ-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private modalService: NzModalService) {}
  title = 'MLChat';
  isMobile = window.innerWidth < 992;

  openPdfModal(pdfSrc: string) {
    this.modalService.create({
      nzContent: PdfModalComponent,
      nzFooter: null,
      nzWidth: this.isMobile? 'auto' : '70vw',
      nzData: {
        isMobile: this.isMobile,
        pdfSrc: pdfSrc
      }
    });
  }

  openFAQModal() {
    this.modalService.create({
      nzContent: FAQModalComponent,
      nzFooter: null,
      nzWidth: this.isMobile? 'auto' : '70vw',
      nzClosable: false,
      //add title
      // nzTitle: 'FAQ',
      nzBodyStyle: {
        // background: ''
      }
    });
  }

}