import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/model/author.model';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = []

  message: string

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors() {

    this.authorService.getAuthorsList()
      .subscribe(authors => {
        console.log(authors)
        this.authors = authors;
      });
  }

  showCreatePage() {
    this.router.navigate(['/author', -1])
  }

  showUpdatePage(id: number) {
    console.log(`update author ${id}`)
    this.router.navigate(['/author', id])
  }

  deleteAuthor(id: number) {
    return this.authorService.deleteAuthor(id).subscribe(response => {
      console.log("Author deleted!")
      this.message = 'Book deleted successfully!'
      this.getAllAuthors();
    })
  }

}
