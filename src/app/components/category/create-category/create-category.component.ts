import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();
  message?: string

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  createCategory() {
    this.categoryService.createCategory(this.category).subscribe(response=>{
      this.message= 'Category added successfully!'
      console.log(response)
    })
  }

}
