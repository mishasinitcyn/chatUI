import { Component, HostListener } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private modalService: NzModalService) {}
  tab = 1;
  title = 'MLChat';

}