import { Component, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

export interface ModalData {
  isMobile: boolean;
}

@Component({
  selector: 'app-pdf-modal',
  styleUrl: './pdf-modal.component.css',
  template: `
    <div style="margin: 0;">
      <pdf-viewer [src]="'assets/5.pdf'" [render-text]="true" [autoresize]="true" [fit-to-page]="data.isMobile" style="height: 70vh; margin: auto; max-height: 90vh;" [zoom]="1"></pdf-viewer>
    </div>
  `
})
export class PdfModalComponent {
  public data = inject<ModalData>(NZ_MODAL_DATA);
}