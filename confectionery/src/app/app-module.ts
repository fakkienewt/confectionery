import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Service } from './main/service';
import { Search } from './search/search';
import { Page } from './page/page';
import { RouterModule } from '@angular/router';
import { Cart } from './cart/cart';
import { Title } from './title/title';
import { CartService } from './cart/cart-service';

@NgModule({
  declarations: [
    App,
    Header,
    Main,
    Footer,
    Search,
    Page,
    Cart,
    Title,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Service,
    CartService
  ],
  bootstrap: [App]
})
export class AppModule { }
