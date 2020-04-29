import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from "./user/sign-in/sign-in.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";

import {AuthorsComponent} from './authors/authors.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductListComponent} from './product-list/product-list.component';
import {BookComponent} from './book/book.component';


const routes: Routes = [
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
    {path: 'login', component: SignInComponent},
    {path:'signup', component:SignUpComponent},
    {path: 'categories/', component: CategoriesComponent },
    {path: 'categories/<int:category_id>', component: CategoriesComponent},
    {path: 'categories/<int:category_id>/books', component: ProductListComponent},
    {path: 'writers/', component: AuthorsComponent},
    {path: 'writer/<int:writer_id>', component: AuthorsComponent},
    {path: 'books', component: BookComponent},
    {path: 'books/<int:book_id>', component: BookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
