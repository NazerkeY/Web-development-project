// import { Injectable } from '@angular/core';
// import {from, Observable, of} from 'rxjs';
// import { Product, allProducts } from '../database/product';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
//
// import {allbooks, Book} from '../books';
// import { catchError, map, tap } from 'rxjs/operators';
// import {Category, categoryType } from '../database/category';
// import {MessagesService} from '../messages.service';
// import {Author} from '../authors';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class BookshopService {
//   constructor(private http: HttpClient) {}
//   BASE_URL = 'http://localhost:8000';
//   // BASE_URL = 'http://127.0.0.1:8000';
//   private messagesService: any;
//
//   // login(username, password): Observable<LoginResponse> {
//   //   return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
//   //     username,
//   //     password
//   //   });
//   // }
//   // private authorsUrl = 'api/authors';  // URL to web api
//   // private heroesUrl = 'api/books';  // URL to web api
//
//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
//
//   getAllProducts(): Observable<Book[]> {
//     return this.http.get<Book[]>(`${this.BASE_URL}/api/books`);
//   }
//
//   getCategoryType(): Observable<Category[]> {
//     return this.http.get<Category[]>(`${this.BASE_URL}/api/categories`);
//   }
//
//
//   getCategory(id): Observable<Category> {
//     return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
//   }
//
//   getProducts(id): Observable<Book> {
//     return this.http.get<Book>(`${this.BASE_URL}/api/books/${id}/`);
//   }
//
//   deleteBook(id): Observable<any> {
//     return this.http.delete(`${this.BASE_URL}/api/books/${id}/`);
//   }
//   //
//   // constructor(
//   //   private http: HttpClient,
//   //   private messagesService: MessagesService) { }
//   //
//   // getProducts(id: number): Observable<Product[]> {
//   //   return of(allProducts.filter(product => product.category_id === id));
//   // }
//   // getCategoryType(): Observable<Category[]> {
//   //   return of(categoryType);
//   // }
//   //
//   // getAllProducts(): Observable<Book[]> {
//   //   return of(allbooks);
//   // }
//   //
//   // getProduct(id: number): Observable<Product> {
//   //   return of(allProducts.find(product => product.id === id));
//   // }
//   //
//   //
//   /** POST: add a new book to the server */
//   add(hero: Book): Observable<Book> {
//     return this.http.post<Book>('${this.BASE_URL}/api/books', hero, this.httpOptions).pipe(
//       tap((newHero: Book) => this.log(`added hero w/ id=${newHero.id}`)),
//       catchError(this.handleError<Product>('addHero'))
//     );
//   }
//
//   /** DELETE: delete the book from the server */
//   // tslint:disable-next-line:adjacent-overload-signatures
//   delete(b: Book | number): Observable<Product> {
//     const id = typeof b === 'number' ? b : b.id;
//     const url = `${this.BASE_URL}/api/books}/${id}`;
//
//     return this.http.delete<Product>(url, this.httpOptions).pipe(
//       tap(_ => this.log(`deleted hero id=${id}`)),
//       catchError(this.handleError<Product>('deleteHero'))
//     );
//   }
//
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//
//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead
//
//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);
//
//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }
//
//   /** Log a HeroService message with the MessageService */
//   private log(message: string) {
//     this.messagesService.add(`HeroService: ${message}`);
//   }
//   getAuthors(): Observable<Author[]> {
//     return this.http.get<Author[]>('${this.BASE_URL}/api/authors')
//       .pipe(
//         tap(_ => this.log('fetched authors')),
//         catchError(this.handleError<Author[]>('getAuthors', []))
//       );
//   }
//
//   /** GET hero by id. Return `undefined` when id not found */
//   getAuthorNo404<Data>(id: number): Observable<Author> {
//     const url = `${this.BASE_URL}/api/authors/?id=${id}`;
//     return this.http.get<Author[]>(url)
//       .pipe(
//         map(authors => authors[0]), // returns a {0|1} element array
//         tap(h => {
//           const outcome = h ? `fetched` : `did not find`;
//           this.log(`${outcome} author id=${id}`);
//         }),
//         catchError(this.handleError<Author>(`getAuthor id=${id}`))
//       );
//   }
//
//   /** GET hero by id. Will 404 if id not found */
//   getAuthor(id: number): Observable<Author> {
//     const url = `${this.BASE_URL}/api/authors/${id}`;
//     return this.http.get<Author>(url).pipe(
//       tap(_ => this.log(`fetched author id=${id}`)),
//       catchError(this.handleError<Author>(`getAuthor id=${id}`))
//     );
//   }
//
//   /* GET heroes whose name contains search term */
//   searchAuthors(term: string): Observable<Author[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<Author[]>(`${this.BASE_URL}/api/authors/?name=${term}`).pipe(
//       tap(x => x.length ?
//          this.log(`found authors matching "${term}"`) :
//          this.log(`no authors matching "${term}"`)),
//       catchError(this.handleError<Author[]>('searchAuthors', []))
//     );
//   }
//
// }
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Category} from '../models';
@Injectable({
  providedIn: 'root'
})
export class BookshopService {
  BASE_URL = 'http://localhost:8000';
  httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient ) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(this.BASE_URL + '/api/books/' + id + '/', this.httpOptions);
  }
  getAuthors() {
     return this.http.get(this.BASE_URL + '/api/authors/', this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProducts(): Observable<any> {
    return this.http.get(this.BASE_URL + '/api/books/', this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProductsByCategoryId(id): Observable<any> {
    return this.http.get(this.BASE_URL + '/api/books/', {params: {category: id}, headers: this.httpHeaders});
  }

  getProductsByAuthor(id, authorId): Observable<any> {
    const params = {
      fabricator: id,
      category: (authorId) ? authorId : ''
    };
    return this.http.get(this.BASE_URL + '/api/books/', {params, headers: this.httpHeaders});
  }


  private handleError(operation = 'operation', result?) {
    return (error: any): Observable<any> => {
      console.log('Handle error');
      console.error(error); // log to console instead
      return of(result);
    };
  }
  delete(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/books/${id}/`);
  }
  getCategories(): Observable<any> {
    return this.http.get(this.BASE_URL + '/api/categories/', this.httpOptions);
  }
   getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

   deleteCompany(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/categories/${id}/`);
  }

}




