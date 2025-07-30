import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart-service';
import { CartItem } from './CartItem';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {

  constructor(
    public router: Router,
    public cartservice: CartService
  ) {
  }

  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartservice.items;
  }

  onClickMinus(itemId: number): void {
    this.cartservice.onClickMinus(itemId);
    this.loadCartItems();
  }

  onClickPlus(itemId: number) {
    this.cartservice.plusItem(itemId);
    this.loadCartItems();
  }

  displaySum(): number {
    return this.cartservice.countSum();
  }

  onClickPay(): void {
    this.router.navigate(['payment/money']);
  }
}
