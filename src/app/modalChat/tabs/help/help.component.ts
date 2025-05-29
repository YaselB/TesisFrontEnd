import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class HelpTabComponent implements OnInit {
  @Output() contactSupportRequested = new EventEmitter<void>();
  
  selectedHelpArticle: HelpArticle | null = null;
  searchQuery = '';
  filteredHelpItems: HelpArticle[] = [];
  
  // Array de ayudas para facilitar su modificación
  ayudas: HelpArticle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5YXNlbGJhcnJpb3NjYXJyaWxsb0BnbWFpbC5jb20ifQ.o-1YKPrQTE7rnaJdgUN0PSbaXvpEgNTdmQ-FQ1ccU2E';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    // Inicializar filteredHelpItems con las ayudas locales primero
    this.filteredHelpItems = [...this.ayudas];
    
    this.http.get<any[]>('http://localhost:8000/top?limit=10&threshold=0.3', { headers }).subscribe({
      next: (data) => {
        this.ayudas = data.map((item, idx) => ({
          id: idx + 1,
          title: item.question,
          content: item.response
        }));
        this.filteredHelpItems = [...this.ayudas];
      },
      error: (err) => {
        // Si falla, usa las ayudas locales
        this.filteredHelpItems = [...this.ayudas];
      }
    });
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
    // Añadir debounce para mejor performance
    setTimeout(() => {
        const query = this.searchQuery.trim().toLowerCase();
        if (!query) {
            this.filteredHelpItems = [...this.ayudas];
            return;
        }
        
        this.filteredHelpItems = this.ayudas.filter(item =>
            item.title.toLowerCase().includes(query) ||
            (item.content && item.content.toLowerCase().includes(query))
        );
        this.selectedHelpArticle = null;
    }, 300);
}

  // Ya no necesitamos toggleHelp ya que ahora navegamos a la vista detallada

  contactSupport(): void {
    this.contactSupportRequested.emit();
  }
}