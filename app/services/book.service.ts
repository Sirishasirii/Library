import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BookService {
 
    private baseUrl: string = 'http://localhost:8081/books/';
    private httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'localhost:4200'); 
    
   
  
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}` + 'findAll');
  }

  getBook(id: number): Observable<any> {
    console.log("getBook() id is: "+id)
    return this.httpClient.get(`${this.baseUrl}find/${id}`);
  }

  addBook(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'insert', book, { headers: this.httpHeaders });
  }

  bookmod(book: Book): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + 'update', book, { headers: this.httpHeaders });
  }

  delBook(id: number): Observable<Object> {
    console.log(id);
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }
}
