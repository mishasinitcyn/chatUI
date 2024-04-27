import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { User, Message, default_message } from '../interface';
import { ChatStateService } from '../chat-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public chatStateService: ChatStateService, private chatService: ChatService) {
  }
 
  messages: any[] = [default_message];
  history: string[] = [`Assistant: ${default_message.text}`];

  ngOnInit() {
    const storedState = this.chatStateService.getChatState();
    if (storedState) {
      this.messages = storedState;
      this.history = storedState.map((message: any) => {
        return message.user.name + ": " + message.text;
      });
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
        // avatar: 'url-to-user-avatar',
      },
    });
    this.history.push("User: " + event.message);

    this.chatService.sendQuery(event.message, this.history).subscribe({
      next: (apiResponse) => {
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