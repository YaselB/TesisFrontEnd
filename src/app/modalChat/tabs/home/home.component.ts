import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpTabComponent } from "../help/help.component";



@Component({
  selector: 'app-home-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeTabComponent {
  @Output() navigateToChatTab = new EventEmitter<void>();
  @Output() navigateToHelpArticle = new EventEmitter<number>();

  navigateToChat(): void {
    this.navigateToChatTab.emit();
  }

  navigateToFAQ(): void {
    // Navegar directamente al artículo de ayuda con ID 4 (Preguntas Frecuentes)
    this.navigateToHelpArticle.emit(4);
  }

  chatTopics = [
    {
      title: '¿Qué hago si no puedo iniciar sesión?',
      description: 'Asegúrate de que estás usando el usuario y contraseña correctos. Si el problema persiste, utiliza la opción de "Recuperar contraseña".'
    },
    {
      title: '¿Puedo eliminar registros por error?',
      description: 'Sí, pero el sistema solicita confirmación antes de eliminar. Siempre verifica dos veces antes de aceptar.'
    },
    {
      title: '¿Puedo ver un resumen de mis actividades?',
      description: 'Sí, muchas secciones tienen opciones como "Mostrar", "Filtros" y "Acciones" que te permiten revisar registros anteriores.'
    },
    {
      title: '¿Qué significan los campos en rojo al llenar formularios?',
      description: 'Indican que hubo un error de validación. Corrige el dato señalado y vuelve a intentar.'
    }
  ];
  
    
  
}

