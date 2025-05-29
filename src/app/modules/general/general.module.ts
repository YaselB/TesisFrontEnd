import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './test/general.component';
import { Routes, RouterModule } from '@angular/router';
import { ngxPermissionsGuard } from 'ngx-permissions';

/** Cada nueva ruta debe hacerse con permisos definidos dentro del arreglo only.
 * Así, solo los usuarios con esos permisos pueden navegar dentro del componente.
 * Only recibe como parámetro un arreglo de strings del mismo formato que los permisos.
 */

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        only: ['ACCESS_GENERAL'],
      },
    },
    children: []
  },
];

@NgModule({
  declarations: [GeneralComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralModule {}
