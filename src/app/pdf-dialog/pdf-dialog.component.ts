import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.scss']
})
export class PdfDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { pdfUrl: string },
    private dialogRef: MatDialogRef<PdfDialogComponent>
  ) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
