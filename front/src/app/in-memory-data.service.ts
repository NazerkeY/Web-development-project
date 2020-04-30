import { Injectable } from '@angular/core';
import { Author } from './authors';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){

  const authors=[
  { id: 1001, name: 'Kiera Cass' },
  { id: 1002, name: 'Gillian Flynn' },
  { id: 1003, name: 'Lora Shroff' },
  { id: 1004, name: 'John Boyne' },
  { id: 1005, name: 'Alan Brennert' },
  { id:1006, name: 'Martin Amis' },
  { id:1007, name: 'Paulo Coelho' },
  { id:1008, name: 'Kate Christensen' },
  { id:1009, name: 'Sandra Dallas' },
  { id:1010, name: 'Robby Doyle' },
  { id:1011, name: 'Louise Erdrich' },
  { id:1012, name: 'Dave Eggers' }
  ];
  return {authors};
  }
  genId(authors: Author[]): number {
    return authors.length > 0 ? Math.max(...authors.map(authors => authors.id)) + 1 : 11;
  }

}
