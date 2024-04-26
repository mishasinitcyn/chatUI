import { Component, OnInit } from '@angular/core';
import {TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { MatDialog } from '@angular/material/dialog';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { ChatService } from '../chat.service';
import { User, Message, default_message } from '../interface';
import { ChatStateService } from '../chat-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public chatStateService: ChatStateService, public dialog: MatDialog, private menuService: NbMenuService, private notification: NzNotificationService, private chatService: ChatService) {
  }
 
  messages: any[] = [default_message];

  ngOnInit() {
    const storedState = this.chatStateService.getChatState();
    if (storedState) {
      this.messages = storedState;
    }
  }

  ngOnDestroy() {
    this.chatStateService.storeChatState(this.messages);
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'User',
        avatar: 'url-to-user-avatar',
      },
    });
  
    this.chatService.sendQuery(event.message).subscribe({
      next: (apiResponse) => {
        this.messages.push({
          text: apiResponse,
          date: new Date(),
          reply: false,
          user: {
            name: 'System',
            avatar: 'url-to-system-avatar',
          },
        });

      },
      error: (error: any) => {
        console.error('API Error:', error);
        this.messages.push({
          text: 'Failed to get response from the server.',
          date: new Date(),
          reply: false,
          user: {
            name: 'System',
            avatar: 'url-to-system-avatar',
          },
        });
  

      }
    });
  }
}
