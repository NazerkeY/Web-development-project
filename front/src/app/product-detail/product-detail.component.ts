import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookshopService } from '../service/bookshop.service';
import { Product } from '../database/product';
import {CartService} from '../service/cart.service';
import {Book} from '../models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // product: Book;
  // categories: any;
  // BookshopService: any;
  //
  // constructor(
  //   private route: ActivatedRoute,
  //   private Service: BookshopService,
  //   private cartService: CartService
  // ) {
  // }
  //
  // ngOnInit(): void {
  //   this.getProduct();
  // }
  //
  // addToCart(product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
  //
  // getProduct() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //
  //   this.Service.getProducts(id).subscribe(product => this.product = product);
  //
  // }
  product: Book;
  categories: any;
  BookshopService: any;
  constructor(
    private route: ActivatedRoute,
    private Service: BookshopService,

  ) { }

  ngOnInit(): void {
    this.getProduct();
  }



  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.Service.getProduct(id).subscribe(product => this.product = product);

    }


}
