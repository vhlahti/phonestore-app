import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../cart.service';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.snackbarMessage = 'Product added to cart!';
    this.openSnackbar();
  }

  notifyUser() {
    this.snackbarMessage = 'You will be notified when the product is back in stock!';
    this.openSnackbar();
  }

  openSnackbar() {
      // Get the snackbar DIV
      const x = document.getElementById("snackbar");
    
      // Add the "show" class to DIV
      if (x) {
        x.className = "show";
      }
    
      // After 3 seconds, remove the show class from DIV
      setTimeout(() => {
        if (x) {
          x.className = x.className.replace("show", "");
        }
      }, 3000);
  }


}
