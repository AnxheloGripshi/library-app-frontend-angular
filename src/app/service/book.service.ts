import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private baseURL = 'http://localhost:8080/api'

    constructor(private http: HttpClient) {
     
    }

    getBooksList(){

        return this.http.get<Book[]>(this.baseURL+'/books');
    
    }

    createBook(book: Book){
        return this.http.post(this.baseURL+'/create-book',book);
    }

    updateBook(book: Book){
        return this.http.put(this.baseURL+'/update-book',book);
    }

    deleteBook(id: number){

        return this.http.delete(this.baseURL+'/delete-book/'+id);
    }

    findBook(id: number){
        return this.http.get<Book>(this.baseURL+'/book/'+id)
    }




}