import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
