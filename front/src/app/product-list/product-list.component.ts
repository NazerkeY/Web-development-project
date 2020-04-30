import { Component, OnInit } from '@angular/core';
import { BookshopService} from '../service/bookshop.service';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../database/product';
//import {Book} from '../books';
import {Book} from '../models';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Book;
  id;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private Service: BookshopService,
  ) { }

  ngOnInit(): void {
    this.getCategoryId();
    this.getProducts();
  }
  getCategoryId(): void {
    this.id = +this.route.snapshot.paramMap.get('categoryId');
  }
  getProducts(): void {
  this.Service.getProduct(this.id)
  .subscribe(products => this.products = products);
  }

/*products: Book[]
constructor(private bookshopService: BookshopService,
public route:ActivatedRoute){}

ngOnInit(): void{
this.getProducts();
}

getProducts(){
let id = this.route.snapshot.paramMap.get('id');
id = id.substr(2);
this.bookshopService.getProducts(id).subscribe(products => {
this.products = products;
});
} */

}
