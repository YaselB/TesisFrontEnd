import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { LogRecoveryComponent } from './layouts/recovery/log-recovery.component';
import { E403Component } from './layouts/error-page/e403/e403.component';
import { E404Component } from './layouts/error-page/e404/e404.component';
import { BaseComponent } from './layouts/base.component';
import { E500Component } from './layouts/error-page/e500/e500.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'organization',
        loadChildren: () =>
          import('./modules/organization/organization.module').then(
            (module) => module.OrganizationModule,
          ),
      },
      {
        path: 'examination',
        loadChildren: () =>
          import('./modules/examination/examination.module').then(
            (module) => module.ExaminationModule,
          ),
      },
      {
        path: 'assignment',
        loadChildren: () =>
          import('./modules/assignment/assignment.module').then(
            (module) => module.AssignmentModule,
          ),
      },
      {
        path: 'general',
        loadChildren: () =>
          import('./modules/general/general.module').then(
            (module) => module.GeneralModule,
          ),
      },
      {
        path: 'conversationalAgent',
        loadChildren: () =>
          import('./modules/chatbot/chatbot.module').then(
            (module) => module.ChatbotModule,
          ),
      },
      // {
      //   path: 'dev/docs',
      //   loadChildren: () => import('../../modules/docs/docs.module').then((module) => module.DocsModule),
      // },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recovery',
    component: LogRecoveryComponent,
  },
  {
    path: '403',
    component: E403Component,
  },
  {
    path: '500',
    component: E500Component,
  },
  {
    path: '**',
    component: E404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
