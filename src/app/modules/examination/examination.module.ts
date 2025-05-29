import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './test/examination.component';
import { ngxPermissionsGuard } from 'ngx-permissions';
import { RouterModule, Routes } from '@angular/router';

/** Cada nueva ruta debe hacerse con permisos definidos dentro del arreglo only.
 * Así, solo los usuarios con esos permisos pueden navegar dentro del componente.
 * Only recibe como parámetro un arreglo de strings del mismo formato que los permisos.
 */

const routes: Routes = [
  {
    path: '',
    component: ExaminationComponent,
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        only: ['ACCESS_EXAMINATION'],
      },
    },
    children: []
  },
];

@NgModule({
  declarations: [ExaminationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExaminationModule {}
