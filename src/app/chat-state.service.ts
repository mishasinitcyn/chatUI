import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatStateService {
  private chatState: any;

  storeChatState(state: any) {
    this.chatState = state;
  }

  getChatState() {
    return this.chatState;
  }
}
