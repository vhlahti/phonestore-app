import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items;
  snackbarMessage: string = '';

  constructor(public cartService: CartService,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearItems(): void {
   this.items = this.cartService.clearCart();
  }

  purchaseItems() {
    if (this.cartService.cartItemCount === 0) {
      this.snackbarMessage = 'Nothing to purchase!';
      this.snackbarService.openSnackbar();
    }
    else {
    this.snackbarMessage = 'Thank you for your purchase!';
    this.snackbarService.openSnackbar();
    this.clearItems();
    }
  }

  clearItemsSnackbar() {
    if (this.cartService.cartItemCount === 0) {
      this.snackbarMessage = 'Nothing to clear!';
      this.snackbarService.openSnackbar();
    }
    else {
      this.clearItems();
      this.snackbarMessage = 'Cart is now empty!';
      this.snackbarService.openSnackbar();
    }
  }

}
