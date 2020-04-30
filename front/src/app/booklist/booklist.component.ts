import { Component, OnInit } from '@angular/core';
import { BookshopService} from '../service/bookshop.service';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../database/product';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  products: Product[];
  id;
  constructor(
    private route: ActivatedRoute,
    private Service: BookshopService, ) {}

  ngOnInit(): void {

  }


}
