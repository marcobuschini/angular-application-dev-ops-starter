import { AppRoutingModule } from '../app/app-routing.module'
import { AppComponent } from './app.component'

import { AppConfigModule } from './app-config.module'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConfigModule,
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class AppModule {}
