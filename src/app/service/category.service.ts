import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';

const baseURL = 'http://localhost:8080/api'

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {

    }

    getCategoriesList() {

        return this.http.get<Category[]>(baseURL + '/categories');

    }

    createCategory(category: Category) {
        return this.http.post(baseURL + '/create-category', category)
    }

    deleteCategory(categoryId: number) {
        return this.http.delete(baseURL + '/delete-category/' + categoryId)
    }




}