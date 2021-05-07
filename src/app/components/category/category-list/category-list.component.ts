import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []
  message: string

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {

    this.categoryService.getCategoriesList()
      .subscribe(categories => {
        console.log(categories)
        this.categories = categories;
      });
  }

  deleteCategory(categoryId: number) {
    return this.categoryService.deleteCategory(categoryId).subscribe(response => {
      console.log("Category deleted!")
      this.message = 'Category deleted successfully!'
      this.getAllCategories();
    })
  }

}
