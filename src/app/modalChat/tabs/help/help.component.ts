import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface HelpArticle {
  id: number;
  title: string;
  content: string;
  expanded?: boolean;
  Mcontent?: {
    title: string;
    content: string;
  }[];
}

@Component({
  selector: 'app-help-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpTabComponent {
  @Output() contactSupportRequested = new EventEmitter<void>();
  
  selectedHelpArticle: HelpArticle | null = null;
  searchQuery = '';
  filteredHelpItems: HelpArticle[] = [];
  
  // Array de ayudas para facilitar su modificación
  ayudas: HelpArticle[] = [
    { 
      id: 1, 
      title: '¿Cómo cambiar mi contraseña?', 
      content: 'Ve a tu perfil desde el menú superior y selecciona la pestaña “Cambiar contraseña”. Ingresa tu contraseña actual, la nueva y confirma el cambio haciendo clic en “Cambiar contraseña”.'
    },
    { 
      id: 2, 
      title: '¿Cómo restablecer la contraseña si la olvidé?', 
      content: 'En la pantalla de inicio de sesión, haz clic en “¿Ha olvidado su contraseña?” y sigue las instrucciones para ingresar tu correo y generar una nueva.'
    },
    { 
      id: 3, 
      title: '¿Cómo actualizar mis datos personales?', 
      content: 'Desde tu perfil, en la pestaña “Datos personales”, puedes editar tu nombre, correo y otros campos. Recuerda guardar los cambios con el botón “Actualizar usuario”.'
    },
    { 
      id: 4, 
      title: '❓Preguntas Frecuentes (FAQ)',
      content: '', 
      Mcontent: [
        {
          title: '¿Qué hago si no puedo iniciar sesión?',
          content: 'Asegúrate de que estás usando el usuario y contraseña correctos. Si el problema persiste, utiliza la opción de “Recuperar contraseña”.'
        },
        {
          title: '¿Puedo eliminar registros por error?',
          content: 'Sí, pero el sistema solicita confirmación antes de eliminar. Siempre verifica dos veces antes de aceptar.'
        },
        {
          title: '¿Puedo ver un resumen de mis actividades?',
          content: 'Sí, muchas secciones tienen opciones como “Mostrar”, “Filtros” y “Acciones” que te permiten revisar registros anteriores.'
        },
        {
          title: '¿Qué significan los campos en rojo al llenar formularios?',
          content: 'Indican que hubo un error de validación. Corrige el dato señalado y vuelve a intentar.'
        },
      ] ,     
    },
    { 
      id: 5, 
      title: '¿Cómo bloquear mi sesión temporalmente?', 
      content: 'Haz clic en tu nombre de usuario y selecciona “Bloquear”. Esto protege tu cuenta si necesitas alejarte del equipo sin cerrar sesión.'
    },
  ];

  ngOnInit(): void {
    this.filteredHelpItems = [...this.ayudas];
  }

  ngOnChanges(): void {
    this.filteredHelpItems = [...this.ayudas];
  }

  selectHelpArticle(article: HelpArticle): void {
    this.selectedHelpArticle = article;
  }

  backToHelpList(): void {
    this.selectedHelpArticle = null;
  }

  searchHelp(): void {
    const query = this.searchQuery?.toLowerCase().trim() || '';
    
    if (!query) {
      // Si la búsqueda está vacía, mostrar todos los artículos
      this.filteredHelpItems = [...this.ayudas];
      return;
    }

    // Filtrar artículos que coincidan con la consulta de búsqueda
    this.filteredHelpItems = this.ayudas.filter(item => {
      // Buscar en el título y contenido principal
      const mainMatch = item.title.toLowerCase().includes(query) || 
                      item.content.toLowerCase().includes(query);
      
      // Si tiene Mcontent, buscar también en los títulos y contenidos de los subitems
      const hasMatchingMcontent = item.Mcontent?.some(subItem => 
        subItem.title.toLowerCase().includes(query) || 
        subItem.content.toLowerCase().includes(query)
      );

      return mainMatch || hasMatchingMcontent;
    });

    // Si hay un artículo abierto que ya no está en los resultados, cerrarlo
    if (this.selectedHelpArticle && !this.filteredHelpItems.includes(this.selectedHelpArticle)) {
      this.selectedHelpArticle = null;
    }
  }

  // Ya no necesitamos toggleHelp ya que ahora navegamos a la vista detallada

  contactSupport(): void {
    this.contactSupportRequested.emit();
  }
}