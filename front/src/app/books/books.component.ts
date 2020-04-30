import { Component, OnInit } from '@angular/core';
import { BookshopService} from '../service/bookshop.service';
import { ActivatedRoute} from '@angular/router';
import {Book} from '../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // products: Book[];
  // id;
  // constructor(
  //   private route: ActivatedRoute,
  //   private Service: BookshopService,
  //   ) { }
  //
  // ngOnInit(): void {
  //       this.getProducts();
  // }
  //
  // getProducts(): void {
  // this.Service.getAllProducts()
  // .subscribe(products => this.products = products);
  // }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.Service.add({ name } as Book)
  //     .subscribe(hero => {
  //       this.products.push(hero);
  //     });
  // }
  //
  // delete(book: Book): void {
  //   this.products = this.products.filter(h => h !== book);
  //   this.Service.delete(book).subscribe();
  // }
   products: Book[];
  id;
  constructor(
    private route: ActivatedRoute,
    private Service: BookshopService,
    ) { }

  ngOnInit(): void {
        this.getProducts();
  }

  getProducts(): void {
  this.Service.getProducts()
  .subscribe(products => this.products = products);
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.Service.add({ name } as Book)
  //     .subscribe(hero => {
  //       this.products.push(hero);
  //     });
  // }

  delete(book: Book): void {
    this.products = this.products.filter(h => h !== book);
    this.Service.delete(book).subscribe();
  }

}
