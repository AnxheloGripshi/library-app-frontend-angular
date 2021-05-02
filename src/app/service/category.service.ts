import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book.model';
import { Category } from '../model/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private baseURL = 'http://localhost:8080/api'

    constructor(private http: HttpClient) {
     
    }

    getCategoriesList(){

        return this.http.get<Category[]>(this.baseURL+'/categories');
    
    }

    createCategory(category: Category) {
        return this.http.post(this.baseURL + '/create-category', category)
    }

    


}