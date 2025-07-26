import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Service } from './main/service';
import { Search } from './search/search';

@NgModule({
  declarations: [
    App,
    Header,
    Main,
    Footer,
    Search
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Service,
  ],
  bootstrap: [App]
})
export class AppModule { }
