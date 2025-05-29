import { Component, ElementRef, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Message {
  content: string;
  isUser: boolean;
  isTyping?: boolean;
  timestamp?: Date;
}
interface ChatResponse {
  data: {
    Chat_id: string;
    Create_At: string;
    user: {
      Userid: string;
      Email: string;
      Name: string;
      created_At: string;
    };
  }[];
}

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})


export class ConversationComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @Output() backToMessages = new EventEmitter<string>();
  @Output() navigateToChatTab = new EventEmitter<void>();
  
  messages: Message[] = [];
  newMessage: string = '';
  isTyping: boolean = false;
  private typingEffect: ReturnType<typeof setInterval> | null = null;
  IdChatEnUso: number = 0;

  switchChat(tabId: string) {
    this.backToMessages.emit(tabId);
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }
  
 

  sendMessage(idchat: number = this.IdChatEnUso) {
    const userMessage = this.newMessage.trim();
    if (!userMessage) return;
  
    this.messages.push({
      content: userMessage,
      isUser: true
    });
  
    this.newMessage = '';
    this.isTyping = true;
  

    this.messages.push({
      content: '',
      isUser: false,
      isTyping: true
    });
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5YXNlbGJhcnJpb3NjYXJyaWxsb0BnbWFpbC5jb20ifQ.o-1YKPrQTE7rnaJdgUN0PSbaXvpEgNTdmQ-FQ1ccU2E';
    const chatId = localStorage.getItem('currentChatId');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    this.http.post<{ response: string }>('http://localhost:8000/ask', {
      question: userMessage,
      id_chat : chatId
    } , {headers}).subscribe({
      next: (res) => {
        const fullResponse = res.response;
        let currentText = '';
        let index = 0;
  
        const interval = setInterval(() => {
          if (index < fullResponse.length) {
            currentText += fullResponse[index];
            this.messages[this.messages.length - 1].content = currentText;
            index++;
            this.scrollToBottom();
          } else {
            clearInterval(interval);
            this.messages[this.messages.length - 1].isTyping = false;
            this.isTyping = false;
          }
        }, 25);
      },
      error: (err) => {
        console.error('❌ Error en la petición:', err);
        this.messages[this.messages.length - 1] = {
          content: '⚠️ Error al obtener la respuesta del servidor.',
          isUser: false
        };
        this.isTyping = false;
      }
    });
  }
  
  
  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch(err) { console.error(err); }
    }, 100);
  }

  stopMessage() {
    this.stopTypingEffect();
  }

  private stopTypingEffect() {
    if (this.typingEffect) {
      clearInterval(this.typingEffect);
      this.typingEffect = null;
      this.messages[this.messages.length - 1].isTyping = false;
      this.isTyping = false;
    }
  }

  // Método para crear una nueva conversación
  public createNewConversation() {
    // Primero limpiamos los mensajes actuales
    this.clearMessages();
    
    // Hacemos la petición al endpoint para crear una nueva conversación
    // Cambiamos de GET a POST
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5YXNlbGJhcnJpb3NjYXJyaWxsb0BnbWFpbC5jb20ifQ.o-1YKPrQTE7rnaJdgUN0PSbaXvpEgNTdmQ-FQ1ccU2E';

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    this.http.post<any>('http://localhost:8000/create_new_chat/1', {} , {headers}).subscribe({
      next: (response) => {
        console.log('Nueva conversación creada:', response);
        
        // Guardamos el ID del nuevo chat en localStorage
        localStorage.setItem('currentChatId', response.id_chat.toString());
        console.log(localStorage.getItem('currentChatId'));
        // Inicializamos el chat con un mensaje de bienvenida
        this.messages.push({
          content: 'Hola, ¿en qué puedo ayudarte hoy?',
          isUser: false,
          timestamp: new Date()
        });
        
        // Desplazamos al final del contenedor de chat
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('❌ Error al crear nueva conversación:', err);
        
        // Mostramos un mensaje de error al usuario
        this.messages.push({
          content: '⚠️ Error al crear una nueva conversación. Por favor, inténtalo de nuevo más tarde.',
          isUser: false,
          timestamp: new Date()
        });
        
        // Desplazamos al final del contenedor de chat
        this.scrollToBottom();
      }
    });
  }
  public clean(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5YXNlbGJhcnJpb3NjYXJyaWxsb0BnbWFpbC5jb20ifQ.o-1YKPrQTE7rnaJdgUN0PSbaXvpEgNTdmQ-FQ1ccU2E';

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    this.http.delete<any>(`http://localhost:8000/delete_chat/${localStorage.getItem('currentChatId')}`, {headers}).subscribe({
      next: (response) => {
        localStorage.setItem('currentChatId', '0');
        this.createNewConversation();
      },
    });
  }
  // Método para limpiar todos los mensajes en la pantalla
  public clearMessages() {
    // Limpiamos el array de mensajes
    this.messages = [];
    
    // Si estás usando localStorage para guardar los mensajes, también deberías limpiarlos
    // Por ejemplo:
    const currentChatId = this.getCurrentChatId(); // Método que deberías implementar para obtener el ID del chat actual
    if (currentChatId) {
      const storedChats = JSON.parse(localStorage.getItem('chatMessages') || '{}');
      if (storedChats[currentChatId]) {
        storedChats[currentChatId] = [];
        localStorage.setItem('chatMessages', JSON.stringify(storedChats));
      }
    }
    
    console.log('Mensajes limpiados');
    
    // Opcional: Desplazar al final del contenedor de chat
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 0);
  }

  // Método auxiliar para obtener el ID del chat actual
  private getCurrentChatId(): string | null {
    // Implementa la lógica para obtener el ID del chat actual
    // Esto dependerá de cómo estés manejando las conversaciones en tu aplicación
    // Por ejemplo, podrías tenerlo en una variable de clase, o recuperarlo de un servicio
    
    // Ejemplo simple:
    return localStorage.getItem('currentChatId');
  }
  
  public loadChatMessages() {
    const chatId = localStorage.getItem('currentChatId');
    console.log(chatId);
    if (!chatId) {
      // Si no hay chatId, muestra mensaje de bienvenida
      this.messages = [{
        content: 'Hola, ¿en qué puedo ayudarte hoy?',
        isUser: false,
        timestamp: new Date()
      }];
      return;
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5YXNlbGJhcnJpb3NjYXJyaWxsb0BnbWFpbC5jb20ifQ.o-1YKPrQTE7rnaJdgUN0PSbaXvpEgNTdmQ-FQ1ccU2E';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.get<any>(`http://localhost:8000/get_chat_by_id/${chatId}`, { headers }).subscribe({
      next: (response) => {
        this.messages = [];
        console.log(response);
        response.messages.forEach((msg: any) => {
          // Mensaje del usuario
          this.messages.push({
            content: msg.content,
            isUser: true,
            timestamp: new Date(msg.createdAt)
          });
          // Respuesta del bot (si existe)
          if (msg.response) {
            this.messages.push({
              content: msg.response,
              isUser: false,
              timestamp: new Date(msg.createdAt)
            });
          }
        });
        this.scrollToBottom();
      },
      error: (err) => {
        this.messages = [{
          content: '⚠️ Error , la conversacion ha sido eliminada ,por favor cree una nueva conversacion.',
          isUser: false,
          timestamp: new Date()
        }];
      }
    });
  }
}