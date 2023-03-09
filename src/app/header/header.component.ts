import { Component } from '@angular/core';
import { faMobileScreen, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faMobileScreen = faMobileScreen;
  faCartShopping = faCartShopping;
}
