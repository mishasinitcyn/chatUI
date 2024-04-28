import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { User, Message, default_message } from '../interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  isLoading: boolean = false;

  constructor(private chatService: ChatService) {
  }
 
  messages: any[] = [default_message];
  history: string[] = [`Assistant: ${default_message.text}`];

  sendMessage(event: any) {
    this.isLoading = true;
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'User',
      },
    });
    this.history.push("User: " + event.message);

    this.chatService.sendQuery(event.message, this.history).subscribe({
      next: (apiResponse) => {
        this.isLoading = false;
        this.messages.push({
          text: apiResponse,
          date: new Date(),
          reply: false,
          user: {
            name: 'Assistant',
            avatar: 'url-to-system-avatar',
          },
        });
        this.history.push("Assistant: " + apiResponse);
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('API Error:', error);
        this.messages.push({
          text: 'Failed to get response from the server.',
          date: new Date(),
          reply: false,
          user: {
            name: 'Assistant',
            avatar: 'url-to-system-avatar',
          },
        });
        this.history.push("Assistant: Failed to get response from the server.");
      }
    });
  }
}
