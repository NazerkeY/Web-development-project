import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { CategoriesComponent } from './categories/categories.component';
//import { HomePageComponent } from './home-page/home-page.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';
//import { ProductListComponent } from './product-list/product-list.component';
//import { CartComponent } from './cart/cart.component';
//import { AuthorsComponent } from './authors/authors.component';
//import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    //CategoriesComponent,
    //HomePageComponent,
    //ProductDetailComponent,
    //ProductListComponent,
    //CartComponent,
    //AuthorsComponent,
    //BookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
