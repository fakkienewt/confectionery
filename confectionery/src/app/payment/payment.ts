import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {

  constructor(public cartservice: CartService,
    public router: Router) {

  }

  OnClickBack(): void {
    this.router.navigate(['cart']);
  }
}
