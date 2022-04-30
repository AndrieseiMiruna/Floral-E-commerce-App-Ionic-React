import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  cart = [];
  products =[];
  cartItemCount: BehaviorSubject<number>;
  constructor(private CartService: CartService, private ModalCtrl: ModalController) {}

  ngOnInit() {
    this.products = this.CartService.getProducts();
    this.cart = this.CartService.getCart();
    this.cartItemCount = this.CartService.getCartItemCount();
  }
}
