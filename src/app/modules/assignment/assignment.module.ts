import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './test/assignment.component';
import { ngxPermissionsGuard } from 'ngx-permissions';

/** Cada nueva ruta debe hacerse con permisos definidos dentro del arreglo only.
 * Así, solo los usuarios con esos permisos pueden navegar dentro del componente.
 * Only recibe como parámetro un arreglo de strings del mismo formato que los permisos.
 */

const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent,
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        only: ['ACCESS_ASSIGNMENT'],
      },
    },
    children: []
  },
];

@NgModule({
  declarations: [AssignmentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentModule {}
