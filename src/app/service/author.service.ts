import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Author } from "../model/author.model";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {
    private baseURL = 'http://localhost:8080/api'

    constructor(private http: HttpClient) {

    }

    getAuthorsList() {

        return this.http.get<Author[]>(this.baseURL + '/authors');

    }

    createAuthor(author: Author) {
        return this.http.post(this.baseURL + '/create-author', author)
    }

    updateAuthor(author: Author) {
        return this.http.put(this.baseURL + '/update-author', author);
    }

    deleteAuthor(id: number) {

        return this.http.delete(this.baseURL + '/delete-author/' + id);
    }

    
    findAuthor(id: number) {
        return this.http.get<Author>(this.baseURL + '/author/' + id)
    }
}