import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AssignmentModule } from './modules/assignment/assignment.module';
import { ExaminationModule } from './modules/examination/examination.module';
import { GeneralModule } from './modules/general/general.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { ChatbotModule } from './modules/chatbot/chatbot.module';
import { ToastrModule } from 'ngx-toastr';

// Se importa el componente de chatbot
import { ChatModalComponent } from "./modalChat/chat-modal.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    LayoutsModule,
    AssignmentModule,
    ExaminationModule,
    GeneralModule,
    OrganizationModule,
    ChatbotModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        newestOnTop: false,
    }),
    ChatModalComponent
],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  // exports: [GlobalChatComponent],
})
export class AppModule {}
