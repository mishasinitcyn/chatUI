import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbMenuModule, NbAccordionModule, NbButtonModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SimplebarAngularModule } from 'simplebar-angular';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbChatModule,
    NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbChatModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    MatDialogModule,
    PdfViewerModule,
    NbAccordionModule,
    NbButtonModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    NzMenuModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    SimplebarAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
