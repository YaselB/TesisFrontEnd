import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from 'src/app/components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  declarations: [ChatComponent, MessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ChatbotModule {}
