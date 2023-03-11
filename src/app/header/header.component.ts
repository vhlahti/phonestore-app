import { Component, OnInit } from '@angular/core';
import { faMobileScreen, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faMobileScreen = faMobileScreen;
  faCartShopping = faCartShopping;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    
  }

}
