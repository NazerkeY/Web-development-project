import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  BASE_URL = 'http://localhost:8000/cart';
  // private cartItemUrl = 'http://api.ocenika.com/api/cart-items/';
  // private userCartUrl = 'http://api.ocenika.com/api/carts/';

  constructor(private http: HttpClient) { }

  addToCart(body) {
    return this.http.post(this.BASE_URL, body);
  }

  getItems() {
    return this.http.get(this.BASE_URL);
  }

  // addToCart(product) {
  //   this.items.push(product);
  // }

  // getItems() {
  //   return this.items;
  // }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
