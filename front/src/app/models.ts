export interface Authors {
  id: number;
  name: string;
  book_id: number;
  book_name: string;

}

export interface Category {
  id: number;
  name: string;

}

export interface Book {
  id: number;
  url: string;
  name: string;
  description: string;
  category_id: number;
  author_name: string;
  author_id: number;
  price: number;
  rating: number;
  image: string;
}

export interface LoginResponse {
  token: string;
}
