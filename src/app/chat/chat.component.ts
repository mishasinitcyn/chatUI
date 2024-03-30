import { Component, OnInit } from '@angular/core';
import {TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { PdfDialogComponent } from '../pdf-dialog/pdf-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
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

  chapters = Array.from({ length: 17 }, (_, chapterIndex) => ({
    title: `Chapter ${chapterIndex + 1}`,
    links: Array.from({ length: 5 }, (_, linkIndex) => ({
      label: `Link ${linkIndex + 1} of Chapter ${chapterIndex + 1}`,
      url: `#`,
    })),
  }));
  constructor(public dialog: MatDialog, private menuService: NbMenuService, private notification: NzNotificationService) {}

  
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

    const jsonInput = [
      // {
      //   "role": "system",
      //   "content": "You are a friendly chatbot who always responds in the style of a machine learning professor",
      // },
      // {"role": "user", "content": "Explain Ordinary Linear Regression very briefly, on a high level."}
      {"role": "user", "content": "Please explain the kernel trick."},
      {"role": "system", "content": "Per CS229 Lecture 13, the kernel trick is a method to map data into a higher-dimensional space, where it is easier to classify. This is done by using a kernel function to compute the dot product of the data points in the higher-dimensional space, without actually computing the transformation. The kernel function is a similarity function that measures how similar two data points are. The kernel trick is used in Support Vector Machines (SVMs) to classify data that is not linearly separable in the original space. The kernel trick allows SVMs to find a hyperplane that separates the data in the higher-dimensional space, which corresponds to a non-linear decision boundary in the original space."},

    ];

    this.messages = jsonInput.map(msg => ({
      text: msg.content,
      date: new Date(),
      reply: msg.role === 'user',
      user: {
        name: msg.role === 'user' ? 'User' : 'System',
        avatar: msg.role === 'user' ? 'url-to-user-avatar' : 'url-to-system-avatar',
      },
    }));
  }

  sendMessage(event:any){
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'User',
        avatar: 'url-to-user-avatar',
      },
    });
  }


  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }

}
