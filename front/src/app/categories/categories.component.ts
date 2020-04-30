import { Component, OnInit } from '@angular/core';
import { BookshopService } from '../service/bookshop.service';
import { Category } from '../database/category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // categoryType: Category[];
  // constructor(private Service: BookshopService) { }
  //
  // ngOnInit(): void {
  //   this.getCategoryType();
  // }
  //
  //   getCategoryType(): void {
  //   this.Service.getCategoryType()
  //   .subscribe(categoryType => this.categoryType = categoryType);
  // }
    categories: Category[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private CategoryService: BookshopService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.CategoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  deleteCompany(id) {
    this.CategoryService.deleteCompany(id).subscribe(res => {
      // tslint:disable-next-line:triple-equals
      this.categories = this.categories.filter(c => c.id != id);
    });
  }

}
