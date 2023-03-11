import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  cartItemCount: number = 0;

  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
    this.cartItemCount = +1;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('assets/documents/shipping.json')
  }
}
