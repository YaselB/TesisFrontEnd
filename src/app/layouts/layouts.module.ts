import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { LoginComponent } from 'src/app/layouts/login/login.component';
import { LogRecoveryComponent } from 'src/app/layouts/recovery/log-recovery.component';
import { BreadcrumbsComponent } from './header/breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContentBoxComponent } from './content-box/content-box.component';
import { E403Component } from './error-page/e403/e403.component';
import { E404Component } from './error-page/e404/e404.component';
import { E500Component } from './error-page/e500/e500.component';

@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    HeaderComponent,
    SiderComponent,
    ContentBoxComponent,
    LoginComponent,
    LogRecoveryComponent,
    BreadcrumbsComponent,
    E403Component,
    E404Component,
    E500Component,
  ],
  imports: [CommonModule, AppRoutingModule, CoreModule],
  providers: [],
  exports: [
    BaseComponent,
    FooterComponent,
    HeaderComponent,
    SiderComponent,
    ContentBoxComponent,
    LoginComponent,
    LogRecoveryComponent,
    BreadcrumbsComponent,
    E403Component,
    E404Component,
    E500Component,
  ],
})
export class LayoutsModule {}
