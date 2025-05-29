import { NgModule } from '@angular/core';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  imports: [NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
})
export class NgxMaskModule {}
