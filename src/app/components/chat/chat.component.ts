import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from '../../shared/models/message.model';
import { TextMessage } from '../../shared/models/text-messsage.model';
// import { environment } from '../../../environments/environment';
import { Session } from 'src/app/shared/models/session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @ViewChild('dialog') dialog!: ElementRef;
  @ViewChild('modify_dialog') modify_dialog!: ElementRef;
  colorBackRight: string = '#007bff';
  colorFontRight: string = '#ffffff';
  colorBackLeft: string = '#eeeeee';
  colorFontLeft: string = '#343a40';
  messages: Message[] = [];
  enable: boolean = true;
  BACK_ENABLED: boolean = true;

  sessions: Session[] = [];
  session!: Session;
  session_id!: string;
  messageForm!: FormGroup;
  isSubmitted = false;

  textInput = '';
  user_id = '1';
  isEditing = false;

  info: string = ''; // Tiempo en segundos
  showCountdown: boolean = false;
  interval: any;
  regex = /https?:\/\/[^\s]+/g;

  // maxHeight: number = 100; // Altura máxima en píxeles

  // @ViewChild('textArea') textArea!: ElementRef;

  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder,
  ) {
    const sessionsObservable = chatService.getAllSessions(this.user_id);

    sessionsObservable.subscribe((sessions) => {
      this.sessions = sessions;

      const first = this.sessions.at(0)?.id;
      if (first === undefined) {
        this.addSession();
      } else {
        this.showSession(first);
      }
    });
  }

  useId(session_id: string) {
    this.session_id = session_id;
  }

  showSession(session_id: string) {
    this.useId(session_id);
    const messagesObservable = this.chatService.getAllMessages(session_id);

    messagesObservable.subscribe((messages) => {
      messages.forEach((message) => {
        message.userOwner = message.message_type === 'Human';
      });
      this.messages = messages;
      console.log(this.messages);
    });
  }
  openDialog(session_id: string) {
    this.useId(session_id);
    this.dialog.nativeElement.showModal(); // Muestra el diálogo
  }
  openModifyDialog(session: Session) {
    this.session = session;
    this.useId(session.id);
    this.modify_dialog.nativeElement.showModal(); // Muestra el diálogo
  }
  closeDialog() {
    this.dialog.nativeElement.close();
  }
  closeModify_dialog() {
    this.modify_dialog.nativeElement.close();
  }
  addSession() {
    const session: Session = {
      id: '',
      name: 'SIGIES',
      user_id: this.user_id,
    };

    this.chatService.include(session).subscribe((sessions) => {
      this.sessions = sessions;
    });
  }

  deleteSession(id: string) {
    this.chatService.delete(id).subscribe((sessions) => {
      this.sessions = sessions;
      this.closeDialog();
    });
  }

  editSession() {
    this.isSubmitted = true;
    if (this.messageForm.invalid) return;

    // alert(`nombre: ${this.fc['sessionName'].value}`);

    this.chatService
      .modify(this.messageForm.value.sessionName, this.session_id)
      .subscribe((sessions) => {
        this.sessions = sessions;
      });
    this.closeModify_dialog();
  }

  get fc() {
    return this.messageForm.controls;
  }

  // Método para guardar el texto y deshabilitar la edición
  // saveText(event: Event) {
  //   const input = event.target as HTMLInputElement; // Afirmación de tipo
  //   console.log(input.value);
  //   this.editSession(input.value.toUpperCase()); // Ahora puedes acceder a .value
  // }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      sessionName: [this.session?.name || '', [Validators.required]],
    });
  }

  sendMessage() {
    this.enable = false;
    this.showCountdown = true;
    this.info = 'Procesando la solicitud. ';
    const newMessage: Message = {
      message_content: this.textInput,
      date: '',
      userOwner: true,
      error: false,
      message_type: 'Human',
    };

    this.messages.push(newMessage);

    const messageBack: TextMessage = {
      // firstname: environment.firstName,
      textInput: this.textInput,
    };
    if (this.BACK_ENABLED) {
      this.chatService.sendMessage(messageBack, this.session_id).subscribe({
        next: (serverMessage) => {
          this.showCountdown = false;
          this.enable = true;
          if (this.regex.test(serverMessage)) {
            serverMessage = this.linkFormat(serverMessage);
          }

          const messageReturn: Message = {
            message_content: serverMessage,
            date: new Date().toDateString(),
            userOwner: false,
            error: false,
            message_type: 'IA',
          };

          this.messages.push(messageReturn);
        },
        error: () => {
          this.waitAndShowMessage();
          const messageReturn: Message = {
            message_content:
              'Hubo un error en la solicitud a la BD. Espere el tiempo establecido para una próxima consulta.',
            date: new Date().toDateString(),
            userOwner: false,
            error: true,
            message_type: 'IA',
          };

          this.messages.push(messageReturn);
        },
      });
    }
    this.textInput = '';
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
    // this.adjustHeight(               );
  }
  // adjustHeight() {
  //   const textArea = this.textArea.nativeElement;
  //   textArea.style.height = 'auto'; // Restablecer la altura para calcular el nuevo tamaño
  //   textArea.style.height =
  //     Math.min(textArea.scrollHeight, this.maxHeight) + 'px'; // Ajustar la altura
  // }

  waitAndShowMessage() {
    this.showCountdown = true; // Ocultar el mensaje al iniciar
    let countdown: number = 30; // Reiniciar la cuenta regresiva

    this.interval = setInterval(() => {
      countdown--;
      this.info =
        'Ocurrió un error... Podrá realizar otra solicitud después de: ' +
        countdown.toString() +
        ' segundos';

      if (countdown <= 0) {
        clearInterval(this.interval); // Detener el intervalo
        this.showCountdown = false; // Mostrar el mensaje después de 30 segundos
        this.enable = true;
      }
    }, 1000); // Actualizar cada segundo
  }

  linkFormat(texto: string): string {
    return texto.replace(
      this.regex,
      (enlace) => `<a href="${enlace}" target="_blank">${enlace}</a>`,
    );
  }
}
