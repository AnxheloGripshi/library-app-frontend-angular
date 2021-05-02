import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/model/author.model';
import { Book } from 'src/app/model/book.model';
import { Category } from 'src/app/model/category.model';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book()
  authors: Author[] = []
  categories: Category[] = []

  selectedCategories: Category[] = [];
  selectedAuthor: Author = new Author();
  id: number = -1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private bookService: BookService) { }


  ngOnInit(): void {
    debugger
    this.getAuthorsList();
    this.getCategoriesList();
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.prefillBookData(this.id)
    }

  }

  getAuthorsList() {
    this.authorService.getAuthorsList()
      .subscribe(authors => {
        console.log(authors)
        this.authors = authors;
      });
  }

  getCategoriesList() {
    this.categoryService.getCategoriesList()
      .subscribe(categories => {
        console.log(categories)
        this.categories = categories;
      });
  }

  createBook() {
    this.bookService.createBook(this.book)
      .subscribe(book => {
        console.log(book)
      }, error => console.log(error));
  }

  updateBook() {
    this.book.bookId = this.id
    this.bookService.updateBook(this.book)
      .subscribe(book => {
        console.log(book)
      }, error => console.log(error));
  }

  createOrUpdateBook() {
    debugger
    this.book.author = this.selectedAuthor;
    this.book.categories = this.selectedCategories;

    if (this.id == -1) {
      this.createBook()
    }
    else {
      this.updateBook()
    }
    this.router.navigate(['/books-list']);
  }

  prefillBookData(id: number) {
    this.bookService.findBook(id)
      .subscribe(response => {
        console.log(response)
        this.book.title = response.title
        this.book.description = response.description
        this.book.author = response.author
        this.book.categories = response.categories
      }, error => console.log(error));
  }
}
