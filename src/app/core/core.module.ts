import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ColorPickerModule } from 'ngx-color-picker';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { IconModule } from '@ant-design/icons-angular';
import { NgxMaskModule } from './ngx-mask.module';
import { RouterModule } from '@angular/router';

// registerLocaleData(es               );

// AoT requires an exported function for factories
/* export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http               );
} */

@NgModule({
  exports: [
    ColorPickerModule,
    DragDropModule,
    FormsModule,
    //TODO: Deprecation: Módulo marcado como en desuso.
    // IconsProviderModule,
    // NgxLoadingModule,
    // NgxChartsModule,
    NgxPermissionsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    // TranslateModule,
  ],
  imports: [
    RouterModule,
    ColorPickerModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    IconModule,
    // IconsProviderModule,
    // NgxLoadingModule.forRoot({
    //   // Aquí se ajustan los valores globales del loading spinner
    //   animationType: ngxLoadingAnimationTypes.threeBounce,
    //   backdropBackgroundColour: 'rgba(0,0,0,0.1)',
    //   backdropBorderRadius: '4px',
    //   fullScreenBackdrop: true,
    //   primaryColour: '#fd6600',
    //   secondaryColour: '#ffffff',
    //   tertiaryColour: '#fd6600',
    // }),
    //  NgxChartsModule,
    NgxPermissionsModule.forRoot(),
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class CoreModule {}
