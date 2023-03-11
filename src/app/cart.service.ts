import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  cartItemCount = 0;
  cartTotalSum = 0;

  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
    this.cartItemCount++;
    this.cartTotalSum += product.price;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartItemCount = 0;
    this.cartTotalSum = 0;
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('assets/documents/shipping.json')
  }
}
