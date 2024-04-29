import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { DefaultMessage, TextbookPath, TextbookChapters, AssistantIcon, ReadingIcon, QueryLimit  } from '../interface';
import { AppComponent } from '../app.component';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  isLoading: boolean = false;
  messages: any[] = [DefaultMessage];
  history: string[] = [`Assistant: ${DefaultMessage.text}`];
  assistantIcon = AssistantIcon
  queryCount = 0;
  queryLimit = QueryLimit

  constructor(private chatService: ChatService, private appComponent: AppComponent, private notification: NzNotificationService) {}

  sendMessage(event: any) {
    if (this.queryCount >= this.queryLimit) {
      this.sendNotification('top', 'Query Limit Reached', "Hi, thank you for using MLChat! I've set a limit of 5 queries per session to avoid overwhelming the API. Please refresh the page to start a new session.");
      return;
    }
    this.isLoading = true;
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {name: 'User'},
    });
    this.history.push("User: " + event.message);
    this.queryCount++;

    this.chatService.sendQuery(event.message, this.history).subscribe({
      next: (apiResponse) => {
        this.isLoading = false;
        this.messages.push({
          text: apiResponse,
          date: new Date(),
          reply: false,
          user: {name: 'Assistant'},
        });
        this.history.push("Assistant: " + apiResponse);
        this.createChapterLink(apiResponse);
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('API Error:', error);
        this.messages.push({
          text: 'Failed to get response from the server.',
          date: new Date(),
          reply: false,
          user: {name: 'Assistant'},
        });
        this.history.push("Assistant: Failed to get response from the server.");
      }
    });
  }

  createChapterLink(message: string) {
    TextbookChapters.forEach(tc => {
      tc.chapters.forEach(chapter => {
        if (message.includes(`${tc.title} Chapter ${chapter}`)) {
          const pdfPath = `${TextbookPath}/${tc.title}/${chapter}.pdf`;
          this.messages.push({
            type: 'button',
            customMessageData: {
              text: `${tc.title} Chapter ${chapter}`,
              href: pdfPath 
            },
            reply: false,
            date: new Date(),
            user: {
              name: 'Source',
              avatar: ReadingIcon
            },
          });
        }
      });
    });
  }
  

  openPdfModal(pdfPath: string) {
    console.log('Opening PDF:', pdfPath);
    this.appComponent.openPdfModal(pdfPath);
  }

  sendNotification(position: NzNotificationPlacement, title: string, message: string): void {
    this.notification.blank(
      title,
      message,
      { nzPlacement: position, 
        nzStyle: {
          width: '600px',
        },
      }
    );
  }

}