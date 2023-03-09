import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  faSquareFacebook = faSquareFacebook;
  faSquareTwitter = faSquareTwitter;
  faSquareInstagram = faSquareInstagram;
  
  products = products;
  show = false;
  items;
  product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product) {
    this.cartService.addToCart(product);
  }


}
