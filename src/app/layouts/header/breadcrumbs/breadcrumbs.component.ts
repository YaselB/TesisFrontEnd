import { Component } from '@angular/core';
import { BreadcrumbInfo } from './breadcrumb.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  periodoList: BreadcrumbInfo[] = [
    { name: 'periodo 1', value: '1' },
    { name: 'periodo 2', value: '2' },
    { name: 'periodo 3', value: '3' },
  ];
  periodoCurrent = this.periodoList[0].name;
  tipoList: BreadcrumbInfo[] = [
    { name: 'ordinaria', value: '1' },
    { name: 'extraordinaria', value: '2' },
    { name: 'especial', value: '3' },
  ];
  tipoCurrent = this.tipoList[0].name;
  menuList: BreadcrumbInfo[] = [
    { name: 'prueba 1', value: '1' },
    { name: 'prueba 2', value: '2' },
    { name: 'prueba 3', value: '3' },
  ];
  menuCurrent = this.menuList[0].name;

  ChangePeriodo(periodo: BreadcrumbInfo) {
    this.periodoCurrent = periodo.name;
    console.log(periodo.value);
  }
  ChangeTipo(tipo: BreadcrumbInfo) {
    this.tipoCurrent = tipo.name;
    console.log(tipo.value);
  }
  ChangeMenu(menu: BreadcrumbInfo) {
    this.menuCurrent = menu.name;
    console.log(menu.value);
  }
}
