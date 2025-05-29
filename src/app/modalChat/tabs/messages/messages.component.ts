import { Component, EventEmitter, Input, Output, OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from "./conversation/conversation.component";

interface Message {
  id: number;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
  read: boolean;
  agentId?: number;
}

@Component({
  selector: 'app-messages-tab',
  standalone: true,
  imports: [CommonModule, ConversationComponent],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesTabComponent implements OnInit {
  @Input() messages: Message[] = [];
  @Output() conversationOpened = new EventEmitter<void>();
  @ViewChild(ConversationComponent) conversationComponent!: ConversationComponent;
  
  activeChat: string = 'Mensajes';

  ngOnInit(): void {
    // Inicializar componente
    console.log('MessagesTabComponent inicializado');
  }

  public switchChat(tabId: string) {
    this.activeChat = tabId;
    if (tabId === 'CHAT' && this.conversationComponent) {
      this.conversationComponent.loadChatMessages();
    }
  }
  public getActiveChat() {
    return this.activeChat;
  }
  
  public createNewChat() {
    // Cambiamos a la vista de chat
    this.switchChat('CHAT');
    
    // Llamamos al método createNewConversation del componente de conversación
    setTimeout(() => {
      if (this.conversationComponent) {
        this.conversationComponent.createNewConversation();
      }
    }, 0);
  }
}