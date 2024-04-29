import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { NbThemeModule, NbLayoutModule, NbChatModule, NbMenuModule, NbWindowModule  } from '@nebular/theme';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PdfModalComponent } from './pdf-modal/pdf-modal.component';
import { MenuComponent } from './menu/menu.component';
import { GithubOutline } from '@ant-design/icons-angular/icons';
import { LinkedinOutline } from '@ant-design/icons-angular/icons';
import { MediumCircleFill} from '@ant-design/icons-angular/icons';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


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
    NbLayoutModule,
    NbChatModule,
    NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbWindowModule.forRoot(),
    NbMenuModule.forRoot(),
    PdfViewerModule,
    NzButtonModule,
    NzIconModule.forChild([GithubOutline, LinkedinOutline, MediumCircleFill]),
    NzMenuModule,
    NzDividerModule,
    NzModalModule,
    NzLayoutModule,
    NzTypographyModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
