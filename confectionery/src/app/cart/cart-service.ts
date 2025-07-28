import { Injectable } from '@angular/core';
import { Service } from '../main/service';
import { CartItem } from './CartItem';

const CART_STORAGE_NAME = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  constructor(private service: Service) {
    this.loadCart();
  }

  addToCart(itemId: number) {
    const allItems = this.service.getCategories().flatMap(category => category.menu);
    const item = allItems.find(i => i.id === itemId);
    if (item) {
      const existingCartItem = this.items.find(i => i.itemId === itemId);
      if (!existingCartItem) {
        this.items.push({
          itemId: item.id,
          title: item.name,
          price: item.price,
          img: item.image,
          qty: 1,
        });
      }
      else {
        existingCartItem.qty++;
      }
      this.saveCart();
    }
  }

  onClickMinus(itemId: number) {
    const itm = this.items.find(i => i.itemId === itemId);
    if (itm !== undefined) {
      itm.qty--;
      if (itm.qty <= 0) { 
        this.items = this.items.filter(i => i.itemId !== itemId);
      }
    }
    this.saveCart();
  }

  plusItem(itemId: number) {
    const itm = this.items.find(i => i.itemId === itemId);
    if (itm !== undefined) {
      itm.qty++;
    }
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(this.items));
  }

  private loadCart() {
    const cartData = localStorage.getItem(CART_STORAGE_NAME);
    this.items = cartData ? JSON.parse(cartData) : [];
  }
}
