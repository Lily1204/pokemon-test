import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { environmentProd } from 'src/environments/environment.prod';
import { AuthorizationTokenInterceptor } from './token-interceptor';
import { API_ENDPOINT_PROVIDER } from './tokens';

const snackBarConfig: MatSnackBarConfig = {
  duration: 5000,
  horizontalPosition: 'end',
};

const matFormFieldConfig: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

@NgModule({
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: snackBarConfig,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldConfig,
    },
    {
      provide: API_ENDPOINT_PROVIDER,
      useValue: environmentProd.basePath,
    },
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationTokenInterceptor,
      multi: true,
    },
  ],
})
export class AppProvidersModule {}
