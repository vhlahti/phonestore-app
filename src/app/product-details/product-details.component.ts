import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products = products;
  product;
  snackbarMessage: string = '';

  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.snackbarMessage = 'Product added to cart!';
    this.snackbarService.openSnackbar();
  }

}
