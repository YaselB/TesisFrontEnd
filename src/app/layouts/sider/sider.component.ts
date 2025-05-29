/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';
import { ILeftSubmenu } from '../interfaces/ILeftSubmenu';
import { ILeftMenu } from '../interfaces/ILeftMenu';

@Component({
  selector: 'app-menu-left',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
})
export class SiderComponent {
  @Input() isCollapsedLeft: boolean = false;

  /**
   * Array de ILeftMenus.
   * Contiene en orden: Organization, Examination, Assignment y General.
   *
   * @type {ILeftMenu[]}
   * @memberof SiderComponent
   */
  public displayTabs: ILeftMenu[] = [
    {
      title: '01',
      name: 'ORGANIZACIÓN',
      domain: 'organization',
      menus: [
        {
          name: 'Codificadores',
          menu_items: [
            {
              name: 'Examen',
              url: '',
              permission: '',
            },
            {
              name: 'Carrera',
              url: '',
              permission: '',
            },
            {
              name: 'Área de la ciencia',
              url: '',
              permission: '',
            },
            {
              name: 'Organismo formador',
              url: '',
              permission: '',
            },
            {
              name: 'Color de piel',
              url: '',
              permission: '',
            },
            {
              name: 'Centro de educación superior',
              url: '',
              permission: '',
            },
            {
              name: 'Vinculación territorial',
              url: '',
              permission: '',
            },
            {
              name: 'Tipo de preuniversitario',
              url: '',
              permission: '',
            },
            {
              name: 'Vía de ingreso',
              url: '',
              permission: '',
            },
            {
              name: 'Fuente de ingreso',
              url: '',
              permission: '',
            },
            {
              name: 'Provincia',
              url: '',
              permission: '',
            },
            {
              name: 'Municipio',
              url: '',
              permission: '',
            },
            {
              name: 'Escolaridad',
              url: '',
              permission: '',
            },
            {
              name: 'Ocupación',
              url: '',
              permission: '',
            },
            {
              name: 'Procedencia',
              url: '',
              permission: '',
            },
            {
              name: 'Situación actual',
              url: '',
              permission: '',
            },
            {
              name: 'Modalidad',
              url: '',
              permission: '',
            },
            {
              name: 'Sexo',
              url: '',
              permission: '',
            },
            {
              name: 'Sexo del plan de plazas',
              url: '',
              permission: '',
            },
            {
              name: 'Convocaoria',
              url: '',
              permission: '',
            },
            {
              name: 'Sector laboral',
              url: '',
              permission: '',
            },
            {
              name: 'Tipo de escalafón',
              url: '',
              permission: '',
            },
            {
              name: 'Tipo ganador de evento',
              url: '',
              permission: '',
            },
            {
              name: 'Nivel universitario',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Plan de plazas general',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Control global',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Resumen por vía',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Resumen por CES',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Plan de plazas',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Plan de plazas procesamiento',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Plan de plazas',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Historial de plan de plazas',
          menu_items: [],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Preuniversitario',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Estudiante',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Ficha de un estudiante ',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Cantera de varones al SMA',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Probable sexo no correspondiente',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Requisitos adicionales',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Solicitud',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Intercambio',
              url: '',
              permission: '',
            },
            {
              name: 'Cargar',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
        {
          name: 'Estudiante eximido',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'organization',
          permission: '',
        },
      ],
      permission: 'ACCESS_ORGANIZATION',
    },
    {
      title: '02',
      name: 'EXAMEN',
      domain: 'examination',
      menus: [
        {
          name: 'Actas',
          menu_items: [
            {
              name: 'Preparación de actas',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Para publicar',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Anonimato',
          menu_items: [],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Asistencia',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Tribunal',
          menu_items: [],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Calificación',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Diferencia entre nota y el índice',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Reclamación',
          menu_items: [
            {
              name: 'Solicitud',
              url: '',
              permission: '',
            },
            {
              name: 'Calificación',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Mostrado de examén',
          menu_items: [
            {
              name: 'Calificación',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Reasultado',
          menu_items: [],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Estadísticas',
          menu_items: [],
          open: false,
          domain: 'examination',
          permission: '',
        },
        {
          name: 'Resultados general',
          menu_items: [],
          open: false,
          domain: 'examination',
          permission: '',
        },
      ],
      permission: 'ACCESS_EXAMINATION',
    },
    {
      title: '03',
      name: 'ASIGNACIÓN',
      domain: 'assignment',
      menus: [
        {
          name: 'Discapacitado',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'assignment',
          permission: '',
        },
        {
          name: 'Ganador de evento',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Listado',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'assignment',
          permission: '',
        },
        {
          name: 'Escalafón',
          menu_items: [
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Intercambio',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'assignment',
          permission: '',
        },
        {
          name: 'Preasignación',
          menu_items: [
            {
              name: 'Excluir',
              url: '',
              permission: '',
            },
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Listado',
              url: '',
              permission: '',
            },
            {
              name: 'intercambio',
              url: '',
              permission: '',
            },
            {
              name: 'Plan de plazas',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'assignment',
          permission: '',
        },
        {
          name: 'Mover Plazas',
          menu_items: [],
          open: false,
          domain: 'assignment',
          permission: '',
        },
        {
          name: 'Asignación',
          menu_items: [
            {
              name: 'Excluir',
              url: '',
              permission: '',
            },
            {
              name: 'Entrada',
              url: '',
              permission: '',
            },
            {
              name: 'Listado',
              url: '',
              permission: '',
            },
            {
              name: 'Intercambio',
              url: '',
              permission: '',
            },
            {
              name: 'Plan de plazas',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Listado de matrícula',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Estadísticas',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Composición',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Control del plan',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Valor del corte general de las carreras or convocatorias y procesamiento',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Valor de corte  por carreras general',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Resultados por opciones ',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Plan de plazas para póximo procesamiento ',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'assignment',
          permission: '',
        },
        {
          name: 'Otorgamiento',
          menu_items: [
            {
              name: 'Funcionario',
              url: '',
              permission: '',
            },
            {
              name: 'SIES-3',
              url: '',
              permission: '',
            },
            {
              name: 'Listado',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Estudiante SIES-3 CIP',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Estudiante SIES-3 DIUL',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'assignment',
          permission: '',
        },
      ],
      permission: 'ACCESS_ASSIGNMENT',
    },
    {
      title: '04',
      name: 'GENERAL',
      domain: 'general',
      menus: [
        {
          name: 'Seguridad',
          menu_items: [
            {
              name: 'Uusario',
              url: '',
              permission: '',
            },
            {
              name: 'Rol',
              url: '',
              permission: '',
            },
            {
              name: 'Permiso',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Administración',
          menu_items: [
            {
              name: 'Periodo de ingreso',
              url: '',
              permission: '',
            },
            {
              name: 'Comisión',
              url: '',
              permission: '',
            },
            {
              name: 'Convocatoria',
              url: '',
              permission: '',
            },
            {
              name: 'Procesamiento',
              url: '',
              permission: '',
            },
            {
              name: 'Cargar datos',
              url: '',
              permission: '',
            },
            {
              name: 'Configurar servicios',
              url: '',
              permission: '',
            },
            {
              name: 'Configurar estapas',
              url: '',
              permission: '',
            },
            {
              name: 'Plan de plazas de procesamiento cargadas',
              url: '',
              permission: '',
            },
            {
              name: 'Procesamiento preparados',
              url: '',
              permission: '',
            },
            {
              name: 'Asignaciones realizadas',
              url: '',
              permission: '',
            },
            {
              name: 'Tarea programada',
              url: '',
              permission: '',
            },
            {
              name: 'Reportes',
              url: '',
              permission: '',
            },
            {
              name: 'Nodo',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Reportes genrales',
          menu_items: [
            {
              name: 'Rpt. Modelo 0',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 0.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 0.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 0.3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 1.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 1.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 2.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 2.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.4',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.5',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.6',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.7',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 3.8',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 4.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 4.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 4.3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 4.4',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 4.5',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 4.6',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 5',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 5.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 5.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 6',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 6.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 6.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 7',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 7.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 7.2 ',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 8',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 8.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 8.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 9',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 9.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 9.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 10',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 10.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 10.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 11',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12.3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12.4',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12.5',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 12.6',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 13',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 13.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 13.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 14',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 14.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 14.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 14.3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 14.4',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 15',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 15.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 15.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 15.3',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 15.4',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.4',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.5',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.6',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.7',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.8',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 16.9',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 17 y 18',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 19',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 19.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 19.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 20',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 20.1',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 20.2',
              url: '',
              permission: '',
            },
            {
              name: 'Rpt. Modelo 20.3',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Modelos de datos excel',
          menu_items: [
            {
              name: 'Exportar',
              url: '',
              permission: '',
            },
            {
              name: 'Importar',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Ossec',
          menu_items: [
            {
              name: 'Alertas',
              url: '',
              permission: '',
            },
            {
              name: 'Directorios',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Trazas',
          menu_items: [
            {
              name: 'Revisión',
              url: '',
              permission: '',
            },
            {
              name: 'Acciones',
              url: '',
              permission: '',
            },
            {
              name: 'Datos',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Exportar datos ',
          menu_items: [
            {
              name: 'SIGENU',
              url: '',
              permission: '',
            },
            {
              name: 'CEPES',
              url: '',
              permission: '',
            },
          ],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Ayuda',
          menu_items: [],
          open: false,
          domain: 'general',
          permission: '',
        },
        {
          name: 'Acerca de SIGIES',
          menu_items: [],
          open: false,
          domain: 'general',
          permission: '',
        },
      ],
      permission: 'ACCESS_GENERAL',
    },
  ];

  username?: string;

  clickSingle(array: ILeftSubmenu[], reference: ILeftSubmenu) {
    array.forEach((item) => {
      if (item !== reference) item.open = false;
    });
  }
}
