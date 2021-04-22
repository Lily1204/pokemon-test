import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppProvidersModule } from './providers/app-providers.module';
import { SnackbarProviderModule } from './providers/snackbar-provider/snackbar-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreConfigModule } from './store/store-config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppProvidersModule,
    SnackbarProviderModule,
    HttpClientModule,
    StoreConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
