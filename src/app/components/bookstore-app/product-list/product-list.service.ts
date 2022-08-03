import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://62df2213976ae7460be831a4.mockapi.io/bookstore";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getBook() {
    return this.http.get(this.url);
  }

}
