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
import { provideToastr, ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

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
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Service,
    CartService,
    provideAnimations(),
    provideToastr(),
    ToastrService
  ],
  bootstrap: [App]
})
export class AppModule { }
