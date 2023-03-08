import { Component } from '@angular/core';
import { products } from '../products';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;
  show = false;
  faSquareFacebook = faSquareFacebook;
  faSquareTwitter = faSquareTwitter;
  faSquareInstagram = faSquareInstagram;

}
