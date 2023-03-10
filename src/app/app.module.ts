import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { ShippingComponent } from './shipping/shipping.component';
import { SnackbarService } from './snackbar.service';
import { MatBadgeModule} from '@angular/material/badge'; 
import { MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    ProductDetailsComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [CartService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
