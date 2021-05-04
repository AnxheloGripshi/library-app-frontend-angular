import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] = []
  selectedFile: File = null
  message?: string
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooksList();

  }

  getBooksList() {
    this.bookService.getBooksList()
      .subscribe(books => {
        console.log(books)
        this.books = books;
      });
  }

  deleteBook(id: number) {
    return this.bookService.deleteBook(id).subscribe(response => {
      console.log("Book deleted!")
      this.message = 'Book deleted successfully!'
      this.getBooksList();
    })
  }

  showUpdatePage(id: number) {
    console.log(`update book ${id}`)
    this.router.navigate(['/book', id])
  }

  showCreatePage() {
    this.router.navigate(['/book', -1])
  }

  showUploadImagePage(bookId: number) {
    this.router.navigate(['/upload-image', bookId])
  }

}
