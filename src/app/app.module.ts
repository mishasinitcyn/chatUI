import { CUSTOM_ELEMENTS_SCHEMA, NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbMenuModule, NbAccordionModule, NbButtonModule, NbWindowModule  } from '@nebular/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { PdfModalComponent } from './pdf-modal/pdf-modal.component';
import { MenuComponent } from './menu/menu.component';
import { MarkdownModule  } from 'ngx-markdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { GithubOutline } from '@ant-design/icons-angular/icons';
import { LinkedinOutline } from '@ant-design/icons-angular/icons';
import { MediumCircleFill} from '@ant-design/icons-angular/icons';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PdfModalComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbChatModule,
    NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbWindowModule.forRoot(),
    NbLayoutModule,
    NbChatModule,
    NbMenuModule.forRoot(),
    MatDialogModule,
    PdfViewerModule,
    NbAccordionModule,
    NbButtonModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule.forChild([GithubOutline, LinkedinOutline, MediumCircleFill]),
    NzTagModule,
    NzMenuModule,
    NzDividerModule,
    NzModalModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzSpinModule,
    SimplebarAngularModule,
    MarkdownModule.forRoot({sanitize: SecurityContext.HTML})
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
