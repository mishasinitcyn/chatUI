import { Component, OnInit } from '@angular/core';
import {TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { MatDialog } from '@angular/material/dialog';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { ChatService } from '../chat.service';
import { User, Message, default_message } from '../interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public dialog: MatDialog, private menuService: NbMenuService, private notification: NzNotificationService, private chatService: ChatService) {
    this.messages = [default_message]
  }

  messages: any[] = [];
  menuItems: NbMenuItem[] = [
    {
      title: 'Chapters',
      expanded: false,
      children: [
        {
          title: 'SVD and Eigendecomposition',
          expanded: false,
          children: [
            { title: 'Math for ML Chapter 4', data: { action: 'openPdf', pdfUrl: 'assets/resume.pdf' } },
          ]
        },
        {
          title: 'Norms and Taylor Expansion',
          expanded: false,
          children: [
            { title: 'Math for ML Chapter 3.1', data: { action: 'openPdf', pdfUrl: 'assets/resume.pdf' } },
            { title: 'Math for ML Chapter 5.1', data: { action: 'openPdf', pdfUrl: 'assets/dl/5.pdf' } },
          ]
        },
        {
          title: 'Convexity',
          expanded: false,
          children: [
            { title: 'Math for ML Chapter 3.2', data: { action: 'openPdf', pdfUrl: 'assets/resume.pdf' } },
            { title: 'CS229 Chapter 11.2', data: { action: 'openPdf', pdfUrl: 'assets/dl/5.pdf' } },
          ]
        },
      ],
      icon: 'book',
    },
    {
      title: 'Repo',
      icon: 'github',
      link: '/dashboard',
    },
    {
      title: 'FAQ',
      icon: 'question-mark-circle-outline',
      link: '/profile',
    },
    {
      title: 'Contact Me',
      icon: 'email-outline',
      link: '/messages',
    },
  ];

  /*
  chapters = Array.from({ length: 17 }, (_, chapterIndex) => ({
    title: `Chapter ${chapterIndex + 1}`,
    links: Array.from({ length: 5 }, (_, linkIndex) => ({
      label: `Link ${linkIndex + 1} of Chapter ${chapterIndex + 1}`,
      url: `#`,
    })),
  }));
  */

  ngOnInit() {
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { data } }) => data)
      )
      .subscribe(data => {
        if (data.action === 'openPdf') {
        }
      });

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


  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }

}
