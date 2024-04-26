import { Component, OnInit } from '@angular/core';
import {TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { PdfDialogComponent } from '../pdf-dialog/pdf-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public dialog: MatDialog, private menuService: NbMenuService, private notification: NzNotificationService, private chatService: ChatService) {
    this.jsonInput = [{ role: 'system', content: 'Hello! Feel free to ask me questions about the course material and I will try my best to answer them with citations from the textbooks.'}];
  }

  //create a jsonInput empty object
  jsonInput: any[] = [];
  messages: any[] = [];
  menuItems: NbMenuItem[] = [
/*
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
    */
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

  
  openPdfDialog(pdfUrl: string) {
    this.dialog.open(PdfDialogComponent, {
      data: { pdfUrl: pdfUrl },
      width: '80%',
      height: '90%',
    });
  }

  ngOnInit() {
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { data } }) => data)
      )
      .subscribe(data => {
        if (data.action === 'openPdf') {
          this.openPdfDialog(data.pdfUrl);
        }
      });

    this.messages = this.jsonInput.map(msg => ({
      text: msg.content,
      date: new Date(),
      reply: msg.role === 'user',
      user: {
        name: msg.role === 'user' ? 'User' : 'System',
        avatar: msg.role === 'user' ? 'url-to-user-avatar' : 'url-to-system-avatar',
      },
    }));
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
  
    this.jsonInput.push({
      role: "user",
      content: event.message
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
  
        this.jsonInput.push({
          role: "system",
          content: apiResponse
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
  
        this.jsonInput.push({
          role: "system",
          content: 'Failed to get response from the server.'
        });
      }
    });
  }


  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }

}
