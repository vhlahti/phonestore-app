import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../cart.service';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  faSquareFacebook = faSquareFacebook;
  faSquareTwitter = faSquareTwitter;
  faSquareInstagram = faSquareInstagram;
  faShareNodes = faShareNodes;
  
  products = products;
  show = false;
  items;
  product;
  snackbarMessage: string = '';

  constructor(private cartService: CartService,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.snackbarMessage = 'Product added to cart!';
    this.snackbarService.openSnackbar();
  }

  notifyUser() {
    this.snackbarMessage = 'You will be notified when the product is back in stock!';
    this.snackbarService.openSnackbar();
  }
}
